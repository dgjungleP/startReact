import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import { HeaderMenus } from "./page/header";
import { SiderMenus } from "./page/sider";
import { Layout } from "antd";
const { Content, Footer } = Layout;

function BasePage(props) {
  const [collapsed, changeCollapsed] = useState(false);
  const [selectedTag, changeSelectedTag] = useState("");
  const [tags, changeTags] = useState([]);
  const onCollapse = () => {
    changeCollapsed(!collapsed);
  };
  const onChangeTags = (tagItem) => {
    let newTags = [...tags];
    if (tags.every((item) => item.id != tagItem.id)) {
      newTags.push(tagItem);
    }
    changeSelectedTag(tagItem);
    changeTags(newTags);
  };
  const onCloseTag = (tag) => {
    let newTags = tags.filter((item) => tag.id != item.id);
    if (tag.id == selectedTag.id) {
      changeSelectedTag({});
    }
    changeTags(newTags);
  };
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <SiderMenus collapsed={collapsed} selectTag={onChangeTags} />
        <Layout className="site-layout">
          <HeaderMenus
            collapsed={collapsed}
            onCollapse={onCollapse}
            tags={tags}
            changeSelectedTag={changeSelectedTag}
            closeTag={onCloseTag}
            selectedTag={selectedTag}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>

          <Footer style={{ textAlign: "center" }}>Create By Jungle</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

function Home() {
  return (
    <>
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360, marginTop: 20 }}
        >
          Bill is a cat.
        </div>
      </Content>
    </>
  );
}

function About() {
  return (
    <>
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360, marginTop: 20 }}
        >
          Bill is a cat.
        </div>
      </Content>
    </>
  );
}
ReactDOM.render(
  <BrowserRouter>
    <BasePage />
  </BrowserRouter>,
  document.getElementById("root")
);

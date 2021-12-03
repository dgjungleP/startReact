import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import { HeaderMenus } from "./page/header";
import { SiderMenus } from "./page/sider";
import { Layout } from "antd";
const { Content, Footer } = Layout;

const SubMenus = [
  { id: 1, title: "博客管理", path: "blog" },
  { id: 2, title: "监控中心", path: "monitor" },
];
const menusItems = [
  {
    id: 1,
    parent: 1,
    title: "博客管理",
    path: "blog",
    abselutePath: "blog/blog",
  },
  {
    id: 2,
    parent: 1,
    title: "分类管理",
    path: "class",
    abselutePath: "blog/class",
  },
  {
    id: 3,
    parent: 1,
    title: "标签管理",
    path: "tag",
    abselutePath: "blog/tag",
  },
  {
    id: 4,
    parent: 1,
    title: "专题管理",
    path: "special",
    abselutePath: "blog/special",
  },
  {
    id: 5,
    parent: 2,
    title: "服务器监控",
    path: "server",
    abselutePath: "monitor/server",
  },
  {
    id: 6,
    parent: 2,
    title: "在线用户",
    path: "online",
    abselutePath: "monitor/online",
  },
  {
    id: 7,
    parent: 2,
    title: "Monitor",
    path: "monitor",
    abselutePath: "monitor/monitor",
  },
  {
    id: 8,
    parent: 2,
    title: "Mysql",
    path: "mysql",
    abselutePath: "monitor/mysql",
  },
  { id: 9, parent: -1, title: "接口管理", path: "api", abselutePath: "api" },
];
const RouterMap = {};
makeRouterMap();
function makeRouterMap() {
  menusItems.forEach((item) => (RouterMap[item.abselutePath] = item.title));
}

function BasePage(props) {
  const [collapsed, changeCollapsed] = useState(false);
  const [selectedTag, changeSelectedTag] = useState({});
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
        <SiderMenus
          collapsed={collapsed}
          selectTag={onChangeTags}
          subMenus={SubMenus}
          menusItems={menusItems}
        />
        <Layout className="site-layout">
          <HeaderMenus
            collapsed={collapsed}
            onCollapse={onCollapse}
            tags={tags}
            changeSelectedTag={changeSelectedTag}
            closeTag={onCloseTag}
            selectedTag={selectedTag}
            routerMap={RouterMap}
          />
          <Routes>
            <Route path="/" element={<Home />} />
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
ReactDOM.render(
  <BrowserRouter>
    <BasePage />
  </BrowserRouter>,
  document.getElementById("root")
);

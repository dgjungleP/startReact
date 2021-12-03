import React, { useState } from "react";
import ReactDOM from "react-dom";
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
            selectedTag={selectedTag}
          />
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, marginTop: 20 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
ReactDOM.render(<BasePage />, document.getElementById("root"));

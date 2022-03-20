import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { WeiboDocList } from "./compment/dashboard/dashboard";
import { Layout, Menu } from "antd";
import { ContainerOutlined } from "@ant-design/icons";
import "./main.css";
const { Sider, Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
function MyMenu(props) {
  return (
    <Menu>
      <Menu.Item key="1" icon={<ContainerOutlined />}>
        Weibo Doc
      </Menu.Item>
    </Menu>
  );
}

function BaseLayout(props) {
  return (
    <Layout className="site-layout">
      <Sider className="site-layout-background">
        <MyMenu></MyMenu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background"></Header>
        <Content style={{ margin: "16px 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <WeiboDocList></WeiboDocList>
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BaseLayout></BaseLayout>
  </React.StrictMode>,
  document.getElementById("root")
);

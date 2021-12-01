import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Button, Tag } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function SiderMenus(props) {
  return (
    <>
      <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <Menu theme="dark" mode="inline"></Menu>
      </Sider>
    </>
  );
}
function HeaderMenus(props) {
  return (
    <>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <Button
          type="primary"
          onClick={props.onCollapse}
          style={{ marginBottom: 16 }}
        >
          {React.createElement(
            props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
        <span style={{ marginLeft: 20 }}>首页</span>
      </Header>
      <Header
        className="site-layout-background"
        style={{
          height: 40,
          boxShadow: "2px 0px 4px #888888",
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
        }}
      >
        {props.tags.map((tag) => {
          return (
            <Tag
              key={tag}
              style={{ height: 24 }}
              closable
              onClose={(tag) => {
                console.log(tag);
              }}
            >
              {tag}
            </Tag>
          );
        })}
      </Header>
    </>
  );
}
function BasePage(props) {
  const [collapsed, changeCollapsed] = useState(false);
  const onCollapse = () => {
    changeCollapsed(!collapsed);
  };
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <SiderMenus collapsed={collapsed} />
        <Layout className="site-layout">
          <HeaderMenus
            collapsed={collapsed}
            onCollapse={onCollapse}
            tags={[1, 2, 3]}
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

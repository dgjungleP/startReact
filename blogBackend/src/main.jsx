import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Layout,
  Menu,
  Button,
  Tag,
  Breadcrumb,
  Dropdown,
  Avatar,
  Image,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GithubOutlined,
  HomeOutlined,
  RocketOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";

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
function AvatarMenus(props) {
  return (
    <Menu>
      <Menu.Item key="0">
        <a>关于我</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <a>更新日志</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">退出</Menu.Item>
    </Menu>
  );
}
function HeaderMenus(props) {
  return (
    <>
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Button type="primary" onClick={props.onCollapse}>
            {React.createElement(
              props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
            )}
          </Button>
          <Breadcrumb style={{ marginLeft: 20, display: "inline-block" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div
          style={{
            marginRight: 20,
            display: "flex",
            alignItems: "center",
          }}
        >
          <GithubOutlined className="middium-icon" />
          <HomeOutlined className="middium-icon" />
          <RocketOutlined className="middium-icon" />
          <Dropdown overlay={AvatarMenus} trigger={["click"]}>
            <Avatar
              size="large"
              src="https://joeschmoe.io/api/v1/random"
              style={{ marginLeft: 30, marginRight: 5 }}
            />
          </Dropdown>
        </div>
      </Header>
      <Header
        className="site-layout-background title"
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
              color={props.selectedTag == tag ? "#87d068" : ""}
              onClick={() => props.changeSelectedTag(tag)}
            >
              <span className="point" hidden={props.selectedTag != tag}></span>{" "}
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
  const [selectedTag, changeSelectedTag] = useState("");

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
            tags={[111, 2222, 3333]}
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

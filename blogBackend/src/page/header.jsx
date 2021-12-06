import React from "react";
import "../index.css";
import { Menu, Button, Tag, Breadcrumb, Dropdown, Avatar, Layout } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
const { Header } = Layout;
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GithubOutlined,
  HomeOutlined,
  RocketOutlined,
} from "@ant-design/icons";

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
  let location = useLocation();
  const routerMap = props.routerMap;
  const pathName = location.pathname.substring(1);
  let names = [];
  if (pathName != "") {
    const title = routerMap[pathName];
    names = title.split("/").filter((i) => i);
  }
  const navigate = useNavigate();
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
          <Button type="" onClick={props.onCollapse}>
            {React.createElement(
              props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
            )}
          </Button>

          <Breadcrumb style={{ marginLeft: 20, display: "inline-block" }}>
            <Breadcrumb.Item>
              <Link to="/" onClick={() => props.changeSelectedTag({})}>
                首页
              </Link>
            </Breadcrumb.Item>
            {names.map((item) => (
              <Breadcrumb.Item>
                <Link to={pathName}>{item}</Link>
              </Breadcrumb.Item>
            ))}
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
        {props.tags.map((tag) => (
          <Tag
            key={tag.id}
            style={{ height: 24 }}
            closable
            color={props.selectedTag == tag ? "#87d068" : ""}
            onClick={() => props.changeSelectedTag(tag)}
            onClose={() => {
              props.closeTag(tag);
              navigate("/");
            }}
          >
            <Link to={tag.abselutePath}>
              <span
                className="point"
                hidden={props.selectedTag.id != tag.id}
              ></span>{" "}
              {tag.title}
            </Link>
          </Tag>
        ))}
      </Header>
    </>
  );
}

export { HeaderMenus };

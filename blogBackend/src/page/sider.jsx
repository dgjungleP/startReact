import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Menu, Layout } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;
function SiderMenus(props) {
  return (
    <>
      <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <Menu theme="dark" mode="inline">
          <SubMenu title="博客管理">
            <Menu.Item key="1">博客管理</Menu.Item>
            <Menu.Item key="2">分类管理</Menu.Item>
            <Menu.Item key="3">标签管理</Menu.Item>
            <Menu.Item key="4">专题管理</Menu.Item>
          </SubMenu>
          <SubMenu title="监控中心">
            <Menu.Item key="5">服务器监控</Menu.Item>
            <Menu.Item key="6">在线用户</Menu.Item>
            <Menu.Item key="7">Monitor</Menu.Item>
            <Menu.Item key="8">Mysql</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">接口管理</Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export { SiderMenus };

import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Menu, Layout } from "antd";
const { Sider } = Layout;
function SiderMenus(props) {
  return (
    <>
      <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <Menu theme="dark" mode="inline"></Menu>
      </Sider>
    </>
  );
}

export { SiderMenus };

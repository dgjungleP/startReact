import React from "react";
import "antd/dist/antd.css";
import "./sider.css";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

const SubMenus = [
  { id: 1, title: "博客管理", path: "blog" },
  { id: 2, title: "监控中心", path: "monitor" },
];
const menusItems = [
  { id: 1, parent: 1, title: "博客管理", path: "blog" },
  { id: 2, parent: 1, title: "分类管理", path: "class" },
  { id: 3, parent: 1, title: "标签管理", path: "tag" },
  { id: 4, parent: 1, title: "专题管理", path: "special" },
  { id: 5, parent: 2, title: "服务器监控", path: "server" },
  { id: 6, parent: 2, title: "在线用户", path: "online/user" },
  { id: 7, parent: 2, title: "Monitor", path: "monitor" },
  { id: 8, parent: 2, title: "Mysql", path: "mysql" },
  { id: 9, parent: -1, title: "接口管理", path: "api" },
];
function SiderMenus(props) {
  return (
    <>
      <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <Menu theme="dark" mode="inline">
          {SubMenus.map((subMenu) => (
            <SubMenu title={subMenu.title} key={subMenu.id * 1000}>
              {menusItems
                .filter((item) => item.parent == subMenu.id)
                .map((item) => (
                  <Menu.Item
                    key={item.id}
                    onClick={() => props.selectTag(item)}
                  >
                    <Link to={subMenu.path + "/" + item.path}>
                      {" "}
                      {item.title}
                    </Link>
                  </Menu.Item>
                ))}
            </SubMenu>
          ))}
          {menusItems
            .filter((item) => item.parent == -1)
            .map((item) => (
              <Menu.Item key={item.id} onClick={() => props.selectTag(item)}>
                <Link to={item.path}> {item.title}</Link>
              </Menu.Item>
            ))}
        </Menu>
      </Sider>
    </>
  );
}

export { SiderMenus };

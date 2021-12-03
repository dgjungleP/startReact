import React from "react";
import "antd/dist/antd.css";
import "./sider.css";
import { Menu, Layout } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;

const SubMenus = [
  { id: 1, title: "博客管理" },
  { id: 2, title: "监控中心" },
];
const menusItems = [
  { id: 1, parent: 1, title: "博客管理" },
  { id: 2, parent: 1, title: "分类管理" },
  { id: 3, parent: 1, title: "标签管理" },
  { id: 4, parent: 1, title: "专题管理" },
  { id: 5, parent: 2, title: "服务器监控" },
  { id: 6, parent: 2, title: "在线用户" },
  { id: 7, parent: 2, title: "Monitor" },
  { id: 8, parent: 2, title: "Mysql" },
  { id: 9, parent: -1, title: "接口管理" },
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
                    {item.title}
                  </Menu.Item>
                ))}
            </SubMenu>
          ))}
          {menusItems
            .filter((item) => item.parent == -1)
            .map((item) => (
              <Menu.Item key={item.id}>{item.title}</Menu.Item>
            ))}
        </Menu>
      </Sider>
    </>
  );
}

export { SiderMenus };

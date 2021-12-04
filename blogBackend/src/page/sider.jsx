import React from "react";
import "antd/dist/antd.css";
import "./sider.css";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

function SiderMenus(props) {
  const SubMenus = props.subMenus;
  const menusItems = props.menusItems;
  return (
    <>
      <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <Menu theme="dark" mode="inline">
          {SubMenus.map((subMenu) => (
            <SubMenu
              title={subMenu.title}
              key={subMenu.id * 1000}
              icon={<span className={"iconfont icon-" + subMenu.path}></span>}
            >
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
        </Menu>
      </Sider>
    </>
  );
}

export { SiderMenus };

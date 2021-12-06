import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import { HeaderMenus } from "./page/header";
import { SiderMenus } from "./page/sider";
import { DashBord } from "./page/content/dashbord";
import { Layout } from "antd";
import { Category } from "./page/content/category";
const { Footer, Content } = Layout;

const SubMenus = [
  { id: 1, title: "博客管理", path: "blog" },
  { id: 2, title: "监控中心", path: "monitor" },
  { id: -1, title: "其他", path: "extra" },
];
const menusItems = [
  {
    id: 1,
    parent: 1,
    title: "博客管理",
    path: "blog",
    abselutePath: "blog/blog",
  },
  {
    id: 2,
    parent: 1,
    title: "分类管理",
    path: "class",
    abselutePath: "blog/class",
  },
  {
    id: 3,
    parent: 1,
    title: "标签管理",
    path: "tag",
    abselutePath: "blog/tag",
  },
  {
    id: 4,
    parent: 1,
    title: "专题管理",
    path: "special",
    abselutePath: "blog/special",
  },
  {
    id: 5,
    parent: 2,
    title: "服务器监控",
    path: "server",
    abselutePath: "monitor/server",
  },
  {
    id: 6,
    parent: 2,
    title: "在线用户",
    path: "online",
    abselutePath: "monitor/online",
  },
  {
    id: 7,
    parent: 2,
    title: "Monitor",
    path: "monitor",
    abselutePath: "monitor/monitor",
  },
  {
    id: 8,
    parent: 2,
    title: "Mysql",
    path: "mysql",
    abselutePath: "monitor/mysql",
  },
  {
    id: 9,
    parent: -1,
    title: "接口管理",
    path: "api",
    abselutePath: "extra/api",
  },
];
const RouterMap = {};
makeRouterMap();
function makeRouterMap() {
  menusItems.forEach((item) => {
    let parent = SubMenus.find((data) => data.id == item.parent);
    RouterMap[item.abselutePath] =
      (parent ? parent.title + "/" : "") + item.title;
  });
}

function BasePage(props) {
  const [collapsed, changeCollapsed] = useState(false);
  const [selectedTag, changeSelectedTag] = useState({});
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
  const onCloseTag = (tag) => {
    let newTags = tags.filter((item) => tag.id != item.id);
    changeTags(newTags);
    if (tag.id == selectedTag.id) {
      changeSelectedTag({});
    }
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <SiderMenus
          collapsed={collapsed}
          selectTag={onChangeTags}
          subMenus={SubMenus}
          menusItems={menusItems}
        />
        <Layout className="site-layout">
          <HeaderMenus
            collapsed={collapsed}
            onCollapse={onCollapse}
            tags={tags}
            changeSelectedTag={changeSelectedTag}
            closeTag={onCloseTag}
            selectedTag={selectedTag}
            routerMap={RouterMap}
          />
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, marginTop: 20 }}
            >
              <Routes>
                <Route path="/" element={<DashBord />} />
                <Route path="/blog/class" element={<Category />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Create By Jungle</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <BasePage />
  </BrowserRouter>,
  document.getElementById("root")
);

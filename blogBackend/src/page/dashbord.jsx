import React from "react";
import "antd/dist/antd.css";
import { Card, Layout, Row, Statistic } from "antd";
import "./dashbord.css";
const { Content } = Layout;
function DashBord() {
  return (
    <>
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360, marginTop: 20 }}
        >
          <Row justify="space-between" gutter={[10, 15]}>
            <TitleWithIcon
              className="icon-eye  hover-icon-1"
              title="浏览量"
              value="2000"
            ></TitleWithIcon>
            <TitleWithIcon
              className="icon-My-Book  hover-icon-2"
              title="博客数量"
              value="2000"
            ></TitleWithIcon>
            <TitleWithIcon
              className="icon-user hover-icon-3"
              title="在线用户"
              value="2000"
            ></TitleWithIcon>
            <TitleWithIcon
              className="icon-nonetwork hover-icon-4"
              title="请求量"
              value="2000"
            ></TitleWithIcon>
          </Row>
        </div>
      </Content>
    </>
  );
}
function TitleWithIcon(props) {
  return (
    <Card style={{ width: 400, boxShadow: "2px 2px 7px #577" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          className={"iconfont " + props.className}
          style={{ display: "flex", alignItems: "center" }}
        ></span>
        <Statistic title={props.title} value={props.value}></Statistic>
      </div>
    </Card>
  );
}
export { DashBord };

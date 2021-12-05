import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
function Category(props) {
  return (
    <>
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360, marginTop: 20 }}
        ></div>
      </Content>
    </>
  );
}

export { Category };

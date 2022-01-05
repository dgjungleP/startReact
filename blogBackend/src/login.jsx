import { Button, Card, Col, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
// import "./assest/js/confetti.js";
function Login(props) {
  const myCanvas = React.createRef();

  useEffect(() => {});
  return (
    <div style={{ background: "#000" }}>
      <Card
        style={{
          background: "rgb(255, 255, 255,0)",
          width: "40%",
          position: "absolute",
          left: "30%",
          top: "30%",
          border: "azure",
        }}
      >
        <Row gutter={[0, 20]} justify="center">
          <Col span={24} align="center">
            <span
              style={{
                color: "white",
                font: "bold 30px Arial",
              }}
            >
              KHBlog Bakend Admin
            </span>
          </Col>
          <Col span={16}>
            <Input
              placeholder="Please input username"
              prefix={
                <span
                  className="iconfont icon-user-fill"
                  style={{ color: "coral" }}
                ></span>
              }
              bordered={false}
              style={{ color: "coral" }}
            />
          </Col>
          <Col span={16}>
            <Input
              placeholder="Please input password"
              prefix={
                <span
                  className="iconfont icon-password"
                  style={{ color: "dodgerblue" }}
                ></span>
              }
              bordered={false}
              style={{ color: "dodgerblue", fontsize: 50 }}
            />
          </Col>
          <Col span={16}>
            <Button ghost> Sign</Button>
          </Col>
        </Row>
      </Card>
      <canvas id="canvas" ref={myCanvas} width="100%" height="100%">
        {" "}
      </canvas>
    </div>
  );
}
export { Login };

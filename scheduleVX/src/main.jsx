import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import { Card, Col, List, Row, Statistic } from "antd";
import { getManagerInfo } from "./service/manager";
function App(props) {
  useEffect(() => {
    var timerID = setInterval(() => {
      getManagerInfo().then((res) => {
        console.log(res);
      });
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);
  return (
    <>
      <div>
        <Card title="定时任务看板" type="inner">
          <ScheduleStatistic />
          <ScheduleList />
        </Card>
      </div>
    </>
  );
}

function ScheduleList(props) {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.title} />
          </List.Item>
        )}
      ></List>
    </>
  );
}

function ScheduleStatistic(props) {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <Statistic title="当前注册数量" value={2} />
      </Col>
      <Col span={6}>
        <Statistic title="当前运行数量" value={2} />
      </Col>
      <Col span={6}>
        <Statistic title="共计运行次数" value={200} />
      </Col>
    </Row>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

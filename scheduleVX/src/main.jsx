import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import { Button, Card, Col, List, PageHeader, Row, Statistic } from "antd";
import { getManagerInfo, startSchedule, stopSchedule } from "./service/manager";
function App(props) {
  const [managerInfo, setManagerInfo] = useState({});

  useEffect(() => {
    var timerID = setInterval(() => {
      getManagerInfo()
        .then((res) => {
          setManagerInfo(res.data);
        })
        .catch((res) => {
          clearInterval(timerID);
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
          <ScheduleStatistic
            initCount={managerInfo.currentCount}
            runningCount={managerInfo.runningCount}
            totalRuningCount={managerInfo.totalRunningTime}
          />
          <ScheduleList
            title="定时任务"
            data={managerInfo.periodicScheduleList}
            type="PERIODIC"
          />
          <ScheduleList
            title="单次执行任务"
            data={managerInfo.timerScheduleList}
            type="TIMER"
          />
        </Card>
      </div>
    </>
  );
}

function ScheduleList(props) {
  const data = props.data;
  const type = props.type;
  const stop = (id) => {
    stopSchedule(id).then((res) => {
      console.log(res);
    });
  };
  const start = (id) => {
    startSchedule(id).then((res) => {
      console.log(res);
    });
  };
  const requestNew = () => {
    console.log(type);
  };
  return (
    <>
      <PageHeader
        className="site-page-header"
        title={props.title}
        extra={[<Button onClick={requestNew}>新增</Button>]}
      >
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button onClick={() => start(item.id)}>Start</Button>,
                <Button onClick={() => stop(item.id)} danger>
                  Stop
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={item.name}
                description={item.description}
              />
            </List.Item>
          )}
        ></List>
      </PageHeader>
    </>
  );
}

function ScheduleStatistic(props) {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <Statistic title="当前注册数量" value={props.initCount} />
      </Col>
      <Col span={6}>
        <Statistic title="当前运行数量" value={props.runningCount} />
      </Col>
      <Col span={6}>
        <Statistic title="共计运行次数" value={props.totalRuningCount} />
      </Col>
    </Row>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

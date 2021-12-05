import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Card, Layout, Row, Statistic } from "antd";
import "./dashbord.css";
import ReactEcharts from "echarts-for-react";
import { time, number } from "echarts";
const { Content } = Layout;

function getVirtulData(year) {
  var date = +number.parseDate(year + "-01-01");
  var end = +number.parseDate(+year + 1 + "-01-01");
  var dayTime = 3600 * 24 * 1000;
  var data = [];
  for (var currentTime = date; currentTime < end; currentTime += dayTime) {
    data.push([
      time.format(+currentTime, "{yyyy}-{MM}-{dd}"),
      Math.floor(Math.random() * 500),
    ]);
  }
  return data;
}
function LazyShowEcharts(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return show && <ReactEcharts option={props.options} />;
}
function DayCount() {
  const options = {
    title: {
      top: 30,
      left: "center",
      text: "Daily Step Count",
    },
    tooltip: {},
    visualMap: {
      min: 0,
      max: 500,
      type: "piecewise",
      orient: "horizontal",
      left: "center",
      top: 65,
    },
    calendar: {
      top: 120,
      cellSize: ["auto", "auto"],
      range: "2021",
      itemStyle: {
        borderWidth: 0.5,
      },
      yearLabel: { show: false },
      dayLabel: { show: false },
    },
    series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: getVirtulData("2021"),
    },
  };

  return <LazyShowEcharts options={options}></LazyShowEcharts>;
}
function Count() {
  const options = {
    title: {
      text: "Nightingale Chart",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      left: "center",
      bottom: "5%",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "5%",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };
  return (
    <div style={{ width: "45%" }}>
      <LazyShowEcharts options={options}></LazyShowEcharts>
    </div>
  );
}
function Linke() {
  const options = {
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
        smooth: true,
      },

      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
        smooth: true,
      },
    ],
  };
  return <LazyShowEcharts options={options}></LazyShowEcharts>;
}
const TitleMap = [
  { id: 1, title: "浏览量", value: 200, icon: "eye" },
  { id: 2, title: "博客数量", value: 200, icon: "My-Book" },
  { id: 3, title: "在线用户", value: 200, icon: "user" },
  { id: 4, title: "请求量", value: 200, icon: "nonetwork" },
];
function DashBord() {
  return (
    <>
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360, marginTop: 20 }}
        >
          <Row justify="space-between" gutter={[10, 15]}>
            {TitleMap.map((title) => (
              <TitleWithIcon
                key={title.id}
                className={"icon-" + title.icon + " hover-icon-" + title.id}
                title={title.title}
                value={title.value}
              ></TitleWithIcon>
            ))}
          </Row>
          <DayCount style={{ marginTop: "5%" }}></DayCount>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "5%" }}
          >
            <Count></Count>
            <Count></Count>
          </div>
          <Linke></Linke>
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

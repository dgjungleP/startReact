import React, { useEffect, useState } from "react";
import { Card, Layout, Row, Statistic } from "antd";
import "./dashbord.css";
import ReactEcharts from "echarts-for-react";
import { getHeader } from "../../server/dashbordservice.js";

function LazyShowEcharts(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    show && <ReactEcharts option={props.options} style={{ marginTop: "5%" }} />
  );
}
function DayCount(props) {
  const options = {
    title: {
      top: 30,
      left: "center",
      text: props.title,
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
      range: props.year,
      itemStyle: {
        borderWidth: 0.5,
      },
      yearLabel: { show: false },
      dayLabel: { show: false },
    },
    series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: props.data,
    },
  };

  return <LazyShowEcharts options={options}></LazyShowEcharts>;
}
function Count(props) {
  const options = {
    title: {
      text: props.title,
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
        data: props.data,
      },
    ],
  };
  return (
    <div style={{ width: "45%" }}>
      <LazyShowEcharts options={options}></LazyShowEcharts>
    </div>
  );
}
function Linke(props) {
  const legend = props.data.map((data) => data.name);
  const options = {
    title: {
      text: props.title,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: { data: legend },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
    },
    series: props.data,
  };
  return <LazyShowEcharts options={options}></LazyShowEcharts>;
}

const CountMap = [
  {
    data: [
      { value: 1048, name: "Search Engine" },
      { value: 735, name: "Direct" },
      { value: 580, name: "Email" },
      { value: 484, name: "Union Ads" },
      { value: 300, name: "Video Ads" },
    ],
    title: "标签",
  },
  {
    data: [
      { value: 1048, name: "Search Engine" },
      { value: 735, name: "Direct" },
      { value: 580, name: "Email" },
      { value: 484, name: "Union Ads" },
      { value: 300, name: "Video Ads" },
    ],
    title: "分类",
  },
];
const LinkeData = [
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
];
function DashBord() {
  const [title, setTile] = useState([]);
  const currentDate = new Date();

  const freshHeader = () => {
    getHeader().then((response) => {
      const baseHeader = response.data.data;
      const TitleMap = [
        { id: 1, title: "浏览量", value: 200, icon: "eye" },
        {
          id: 2,
          title: "博客数量",
          value: baseHeader.TagCount,
          icon: "My-Book",
        },
        { id: 3, title: "在线用户", value: 200, icon: "user" },
        { id: 4, title: "请求量", value: 200, icon: "nonetwork" },
      ];
      setTile(TitleMap);
    });
  };
  useEffect(() => {
    freshHeader();
  }, []);
  return (
    <>
      <Row justify="space-between" gutter={[10, 15]}>
        {title.map((title) => (
          <TitleWithIcon
            key={title.id}
            className={"icon-" + title.icon + " hover-icon-" + title.id}
            title={title.title}
            value={title.value}
          ></TitleWithIcon>
        ))}
      </Row>
      <DayCount
        data={[]}
        title={"页面访问量"}
        year={currentDate.getFullYear()}
      ></DayCount>
      <div style={{ display: "flex", alignItems: "center" }}>
        {CountMap.map((count) => (
          <Count
            key={count.title}
            data={count.data}
            title={count.title}
          ></Count>
        ))}
      </div>
      <Linke data={LinkeData} title={"接口请求量"}></Linke>
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

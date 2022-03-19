import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { getWeiboDoc } from "./service/dashboard.js";
import { List } from "antd";

function WeiboDocList(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getWeiboDoc().then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        pagination={{ pageSize: 10 }}
        renderItem={(item) => (
          <List.Item key={item.md5} actions={[...item.links]}>
            <List.Item.Meta
              title={item.title}
              description={item.type}
            ></List.Item.Meta>
            {item.content}
          </List.Item>
        )}
      ></List>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <WeiboDocList></WeiboDocList>
  </React.StrictMode>,
  document.getElementById("root")
);

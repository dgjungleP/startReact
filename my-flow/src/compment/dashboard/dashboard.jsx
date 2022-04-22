import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { getWeiboDoc } from "../../service/dashboard.js";
import { List, Tag } from "antd";

function WeiboDocList(props) {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getWeiboDoc().then((response) => {
      setData(response.data);
    });
  }, []);

  const makeDescription = (item) => {
    return <Tag color="magenta">{item.type}</Tag>;
  };
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        pagination={{
          defaultPageSize: pageSize,
          onChange: (page) => {
            console.log(page);
          },
        }}
        renderItem={(item) => (
          <List.Item
            key={item.md5}
            actions={item.links.map((link) => (
              <a href={link} target="_blank">
                {link}
              </a>
            ))}
          >
            <List.Item.Meta
              title={item.title}
              description={makeDescription(item)}
            ></List.Item.Meta>
            {item.content}
          </List.Item>
        )}
      ></List>
    </>
  );
}

export { WeiboDocList };

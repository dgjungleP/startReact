import { Tag } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { BaseList } from "./baseList";
import { getTagList, createTag } from "../../server/blogservice.js";
import {
  CategoryCreateModel,
  BlogCreateModel,
  TagCreateModel,
} from "../compoment/model";
function CategoryList() {
  const [data, setData] = useState([]);
  const onCreate = () => {};
  const onDelete = () => {};
  const columns = [
    {
      title: "序号",
      dataIndex: "order",
    },
    {
      title: "分类名称",
      dataIndex: "name",
    },
    {
      title: "分类介绍",
      dataIndex: "description",
    },
    {
      title: "点击数",
      dataIndex: "click",
    },

    {
      title: "创建时间",
      dataIndex: "createDate",
    },
    {
      title: "状态",
      dataIndex: "status",
      render: (status) => (
        <span>
          <Tag color="#87d068" style={{ fontSize: 15 }}>
            {status || "正常"}
          </Tag>
        </span>
      ),
      align: "center",
    },
  ];

  return (
    <BaseList
      columns={columns}
      data={data}
      onCreate={onCreate}
      onDelete={onDelete}
      module={<CategoryCreateModel></CategoryCreateModel>}
    ></BaseList>
  );
}
function BlogList() {
  const [data, setData] = useState([]);
  const onCreate = () => {};
  const onDelete = () => {};
  const columns = [
    {
      title: "序号",
      dataIndex: "order",
    },
    {
      title: "标题",
      dataIndex: "title",
    },
    {
      title: "作者",
      dataIndex: "author",
    },
    {
      title: "分类",
      dataIndex: "category",
    },
    {
      title: "标签",
      dataIndex: "tag",
      render: (tags) => (
        <span>
          {(tags || ["a", "b"]).map((tag, index) => (
            <Tag key={tag} color={index % 2 == 0 ? "magenta" : "cyan"}>
              {tag.toUpperCase()}
            </Tag>
          ))}
        </span>
      ),
      align: "center",
    },
    {
      title: "推荐等级",
      dataIndex: "supporter",
      render: (supporter) => (
        <span>
          <Tag color="#87d068" style={{ fontSize: 15 }}>
            {supporter || "正常"}
          </Tag>
        </span>
      ),
      align: "center",
    },
    {
      title: "点击数",
      dataIndex: "clickNumber",
    },
  ];

  return (
    <BaseList
      columns={columns}
      data={data}
      onCreate={onCreate}
      onDelete={onDelete}
      module={<BlogCreateModel></BlogCreateModel>}
    ></BaseList>
  );
}
function TagList() {
  const [data, setData] = useState([]);
  const onCreate = (request) => {
    createTag(request).then(() => {
      freshList();
    });
  };
  const onDelete = () => {};
  const columns = [
    {
      title: "序号",
      dataIndex: "order",
    },
    {
      title: "标签名称",
      dataIndex: "name",
    },

    {
      title: "点击数",
      dataIndex: "click",
    },

    {
      title: "创建时间",
      dataIndex: "createDate",
    },
    {
      title: "状态",
      dataIndex: "status",
      render: (status) => (
        <span>
          <Tag color="#87d068" style={{ fontSize: 15 }}>
            {status || "正常"}
          </Tag>
        </span>
      ),
      align: "center",
    },
  ];
  const freshList = () => {
    getTagList().then((response) => {
      setData(response.data.data);
    });
  };
  useEffect(() => {
    freshList();
  }, []);
  return (
    <BaseList
      columns={columns}
      data={data}
      onCreate={onCreate}
      onDelete={onDelete}
      module={<TagCreateModel create={onCreate}></TagCreateModel>}
    ></BaseList>
  );
}

export { CategoryList, BlogList, TagList };

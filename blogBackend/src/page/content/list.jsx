import { Tag, Modal, Button } from "antd";
import React, { useState } from "react";
import { BaseList } from "./baseList";
import { PlusOutlined } from "@ant-design/icons";
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
      title="分类"
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
      title="博客"
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
  const onCreate = () => {};
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

  return (
    <BaseList
      title="标签"
      columns={columns}
      data={data}
      onCreate={onCreate}
      onDelete={onDelete}
      module={<TagCreateModel></TagCreateModel>}
    ></BaseList>
  );
}

function CategoryCreateModel() {
  return <BaseCreateModel title="分类"></BaseCreateModel>;
}
function BlogCreateModel() {
  return <BaseCreateModel title="博客"></BaseCreateModel>;
}
function TagCreateModel() {
  return <BaseCreateModel title="标签"></BaseCreateModel>;
}

function BaseCreateModel(props) {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  debugger;
  return (
    <>
      <Button type="primary" onClick={showModal}>
        <PlusOutlined />
        新增{props.title}
      </Button>
      <Modal
        title={"创建" + props.title}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{"hello"}</p>
      </Modal>
    </>
  );
}

export { CategoryList, BlogList, TagList };

import { Tag, Modal, Button, Row, Col, Input } from "antd";
import React, { useState } from "react";
import { BaseList } from "./baseList";
import { PlusOutlined, ClearOutlined } from "@ant-design/icons";
const { Search } = Input;

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
      columns={columns}
      data={data}
      onCreate={onCreate}
      onDelete={onDelete}
      module={<TagCreateModel></TagCreateModel>}
    ></BaseList>
  );
}

function CategoryCreateModel() {
  const [name, changeName] = useState("");
  const [description, changeDescription] = useState("");
  const innerModel = (
    <div>
      <BaseInput title="分类名" value={name} onChange={changeName}></BaseInput>
      <BaseInput
        title="分类介绍"
        value={description}
        onChange={changeDescription}
      ></BaseInput>
    </div>
  );
  const category = { name, description };
  const insert = (category) => {
    console.log(category);
  };
  return (
    <BaseCreateModel
      title="分类"
      innerModel={innerModel}
      data={category}
      onInsert={insert}
    ></BaseCreateModel>
  );
}
function BlogCreateModel() {
  const [name, changeName] = useState("");
  const [description, changeDescription] = useState("");
  const innerModel = (
    <div>
      <BaseInput title="标题" value={name} onChange={changeName}></BaseInput>
      <BaseInput
        title="简介"
        value={description}
        onChange={changeDescription}
      ></BaseInput>
    </div>
  );
  const insert = (blog) => {
    console.log(blog);
  };
  const blog = { name, description };
  return (
    <BaseCreateModel
      title="博客"
      innerModel={innerModel}
      data={blog}
      onInsert={insert}
    ></BaseCreateModel>
  );
}
function TagCreateModel() {
  const [name, changeName] = useState("");
  const innerModel = (
    <div>
      <BaseInput title="标签名" value={name} onChange={changeName}></BaseInput>
    </div>
  );
  const insert = (tag) => {
    console.log(tag);
  };
  const tag = { name };
  return (
    <BaseCreateModel
      title="标签"
      innerModel={innerModel}
      data={tag}
      onInsert={insert}
    ></BaseCreateModel>
  );
}
function BaseInput(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <Row align="middle" style={{ marginTop: 5 }}>
      <Col span={4} style={{ textAlign: "end" }}>
        <span>{props.title} :</span>
      </Col>
      <Col span={16} offset={1}>
        <Input value={props.value} onChange={handleChange} />
      </Col>
    </Row>
  );
}
function BaseCreateModel(props) {
  const [visible, setVisible] = React.useState(false);
  const onSearch = (value) => console.log(value);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (data) => {
    props.onInsert(data);
    setVisible(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const onDelete = () => {};
  return (
    <Row align="start" gutter={[15, 50]}>
      <Col>
        <Search
          placeholder={"请输入" + props.title}
          allowClear
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </Col>
      <Col>
        <Button type="primary" onClick={showModal}>
          <PlusOutlined />
          新增{props.title}
        </Button>
        <Modal
          title={"创建" + props.title}
          visible={visible}
          onOk={() => handleOk(props.data)}
          onCancel={handleCancel}
        >
          {props.innerModel}
        </Modal>
      </Col>
      <Col>
        <Button type="primary" danger onClick={() => onDelete()}>
          <ClearOutlined />
          删除{props.title}
        </Button>
      </Col>
    </Row>
  );
}

export { CategoryList, BlogList, TagList };

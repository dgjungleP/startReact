import { Modal, Button, Row, Col, Input } from "antd";
import React, { useState } from "react";
import { PlusOutlined, ClearOutlined } from "@ant-design/icons";
const { Search } = Input;
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

export { CategoryCreateModel, BlogCreateModel, TagCreateModel };

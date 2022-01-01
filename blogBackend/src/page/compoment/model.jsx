import { Modal, Button, Row, Col, Input, Select } from "antd";
import React, { useState, useEffect } from "react";
import { PlusOutlined, ClearOutlined } from "@ant-design/icons";
import "./model.css";
import { getCategoryList, getTagList } from "../../server/blogservice";
const { Search, TextArea } = Input;
const { Option } = Select;
function CategoryCreateModel(props) {
  const [name, changeName] = useState("");
  const [description, changeDescription] = useState("");
  const deleteCategory = props.delete;
  const slectRows = props.seletctRows;
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
  const createCategory = props.create;
  return (
    <BaseCreateModel
      title="分类"
      innerModel={innerModel}
      data={category}
      onInsert={createCategory}
      onDelete={deleteCategory}
      seletctRows={slectRows}
      prepare={async () => {}}
    ></BaseCreateModel>
  );
}
function BlogCreateModel(props) {
  const [title, changeName] = useState("");
  const [description, changeDescription] = useState("");
  const [level, changeLevel] = useState("");
  const [category, chanegeCategory] = useState("");
  const [tag, changeTag] = useState("");
  const [content, changeContent] = useState("");
  const [categoryList, changeCategoryList] = useState([]);
  const [tagList, changeTagList] = useState([]);
  const levelList = [];
  const createBlog = props.create;
  const deleteBlog = props.delete;
  const slectRows = props.seletctRows;
  const getSelectList = async () => {
    getTagList().then((response) => {
      const tags = response.data.data;
      changeTagList(
        tags.map((tag) => <Option key={tag.id}>{tag.name}</Option>) || []
      );
    });
    getCategoryList().then((response) => {
      const categorys = response.data.data;
      changeCategoryList(
        categorys.map((category) => (
          <Option key={category.id}>{category.name}</Option>
        )) || []
      );
    });
  };
  for (let i = 0; i < 10; i++) {
    levelList.push(<Option key={i}>{i + 1 + "级"}</Option>);
  }
  const innerModel = (
    <div>
      <BaseInput title="标题" value={title} onChange={changeName}></BaseInput>
      <BaseInput
        title="简介"
        value={description}
        onChange={changeDescription}
      ></BaseInput>
      <Row align="middle" style={{ marginTop: 5 }}>
        <Col span={4} className="input-title">
          <span>分类 :</span>
        </Col>
        <Col span={5}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="请选择分类"
            onChange={(data) => changeTag(data)}
          >
            {categoryList}
          </Select>
        </Col>

        <Col span={1} className="input-title">
          <span>标签 :</span>
        </Col>
        <Col span={5}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="请选择标签"
            onChange={(data) => chanegeCategory(data)}
          >
            {tagList}
          </Select>
        </Col>
        <Col span={2} className="input-title">
          <span>推荐等级 :</span>
        </Col>
        <Col span={2}>
          <Select
            allowClear
            style={{ width: "100%" }}
            placeholder="请选择等级"
            onChange={(level) => changeLevel(level)}
          >
            {levelList}
          </Select>
        </Col>
      </Row>
      <Row align="middle" style={{ marginTop: 5 }}>
        <Col
          span={4}
          className="input-title"
          style={{ alignSelf: "flex-start" }}
        >
          <span>内容 :</span>
        </Col>
        <Col span={16}>
          <TextArea
            placeholder="Controlled autosize"
            autoSize={{ minRows: 20, maxRows: 30 }}
            onBlur={(content) => changeContent(content.currentTarget.value)}
          />
        </Col>
      </Row>
    </div>
  );
  const blog = { title, description, tag, category, content, level };
  return (
    <BaseCreateModel
      title="博客"
      innerModel={innerModel}
      data={blog}
      onInsert={createBlog}
      onDelete={deleteBlog}
      seletctRows={slectRows}
      prepare={getSelectList}
      bigModel
    ></BaseCreateModel>
  );
}
function TagCreateModel(props) {
  const [name, changeName] = useState("");
  const createTag = props.create;
  const deleteTag = props.delete;
  const slectRows = props.seletctRows;
  const innerModel = (
    <div>
      <BaseInput title="标签名" value={name} onChange={changeName}></BaseInput>
    </div>
  );

  const tag = { name };
  return (
    <BaseCreateModel
      title="标签"
      innerModel={innerModel}
      data={tag}
      onInsert={createTag}
      onDelete={deleteTag}
      seletctRows={slectRows}
      prepare={async () => {}}
    ></BaseCreateModel>
  );
}
function BaseInput(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <Row align="middle" style={{ marginTop: 5 }}>
      <Col span={4} className="input-title">
        <span>{props.title} :</span>
      </Col>
      <Col span={16}>
        <Input value={props.value} onChange={handleChange} />
      </Col>
    </Row>
  );
}
function BaseCreateModel(props) {
  const [visible, setVisible] = React.useState(false);
  const onSearch = (value) => console.log(value);

  const showModal = () => {
    props.prepare().then(() => {
      setVisible(true);
    });
  };

  const handleOk = (data) => {
    props.onInsert(data);
    setVisible(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const onDelete = (data) => {
    props.onDelete(data);
  };
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
          width={props.bigModel ? "" : 500}
        >
          {props.innerModel}
        </Modal>
      </Col>
      <Col>
        <Button
          type="primary"
          danger
          onClick={() => onDelete(props.seletctRows)}
        >
          <ClearOutlined />
          删除{props.title}
        </Button>
      </Col>
    </Row>
  );
}

export { CategoryCreateModel, BlogCreateModel, TagCreateModel };

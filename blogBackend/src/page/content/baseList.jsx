import React from "react";
import { Input, Button, Row, Col, Table } from "antd";
import {
  PlusOutlined,
  ClearOutlined,
  UpOutlined,
  FormOutlined,
} from "@ant-design/icons";
const { Search } = Input;
function BaseList(props) {
  const onSearch = (value) => console.log(value);
  const columns = (props.columns || []).concat({
    title: "操作",
    dataIndex: "operate",
    render: () => (
      <Row align="start" gutter={[15, 50]}>
        <Col>
          <Button style={{ backgroundColor: "#E6A23C", color: "#fff" }}>
            <UpOutlined />
            置顶
          </Button>
        </Col>
        <Col>
          <Button style={{ background: "#0F0C11", color: "#fff" }}>
            <FormOutlined />
            编辑
          </Button>
        </Col>
        <Col>
          <Button style={{ background: "#F56C6C", color: "#fff" }}>
            <ClearOutlined />
            删除
          </Button>
        </Col>
      </Row>
    ),
  });
  const data = props.data || [];
  return (
    <>
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
          <Button type="primary">
            <PlusOutlined />
            新增{props.title}
          </Button>
        </Col>
        <Col>
          <Button type="primary" danger>
            <ClearOutlined />
            删除{props.title}
          </Button>
        </Col>
      </Row>
      <Table
        rowSelection={{
          type: "checkbox",
        }}
        columns={columns}
        dataSource={data}
        style={{ marginTop: 15 }}
      />
    </>
  );
}

export { BaseList };

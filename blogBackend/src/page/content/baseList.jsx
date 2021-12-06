import React from "react";
import { Input, Button, Row, Col, Table } from "antd";
import { ClearOutlined, UpOutlined, FormOutlined } from "@ant-design/icons";
function BaseList(props) {
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
      {props.module}
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

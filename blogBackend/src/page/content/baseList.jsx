import React, { useState } from "react";
import { Button, Row, Col, Table, Popconfirm } from "antd";
import { ClearOutlined, UpOutlined, FormOutlined } from "@ant-design/icons";
function BaseList(props) {
  const [selectedRowKeys, changeSelect] = useState([]);
  const handleDelete = props.onDelete;
  const columns = (props.columns || []).concat({
    title: "操作",
    dataIndex: "operate",
    render: (_, b) => (
      <Row align="start" gutter={[15, 50]}>
        <Col>
          <Button style={{ background: "#0F0C11", color: "#fff" }}>
            <FormOutlined />
            编辑
          </Button>
        </Col>
        <Col>
          <Button
            style={{ background: "#F56C6C", color: "#fff" }}
            onClick={() => handleDelete([b])}
          >
            <ClearOutlined />
            删除
          </Button>
        </Col>
      </Row>
    ),
  });
  const data = props.data || [];
  props.data.forEach((data, index) => {
    data.order = index + 1;
    data.key = index;
  });
  const onSelectChange = (selectRowKey, selectRows) => {
    changeSelect(selectRowKey);
    props.onSelect(selectRows);
  };

  return (
    <>
      {props.module}
      <Table
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
        columns={columns}
        dataSource={data}
        style={{ marginTop: 15 }}
      />
    </>
  );
}

export { BaseList };

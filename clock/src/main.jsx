import { Upload, message, Image, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { InboxOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { getFileList } from "./service/file_service";
const { Dragger } = Upload;
function PictureWall() {
  const [fileList, setFileList] = useState([]);
  const flushFileList = () => {
    getFileList().then((response) => {
      setFileList(response.data);
    });
  };
  useEffect(() => {
    flushFileList();
  }, []);
  return (
    <>
      <Row gutter={[16, 24]} style={{ marginTop: 15, marginBottom: 15 }}>
        {fileList.map((file) => {
          return (
            <Col span={4} key={file.id}>
              <FileCard file={file}></FileCard>
            </Col>
          );
        })}
      </Row>

      <UploadFile freshList={flushFileList}></UploadFile>
    </>
  );
}
function UploadFile(props) {
  const handleDragChange = (info) => {
    const file = info.file;
    const { status } = file;
    if (status !== "uploading") {
      props.freshList();
      console.log(status);
    }
    if (status === "done") {
      message.success(`${file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${file.name} file upload failed.`);
    }
  };
  const handlePreview = async (file) => {
    setPreview(file);
  };
  const handleDrop = (e) => {
    console.log("Dropped files", e.dataTransfer.files);
  };
  return (
    <>
      <Dragger
        multiple={true}
        name="file"
        onChange={handleDragChange}
        onDrop={handleDrop}
        onPreview={handlePreview}
        action="http://127.0.0.1:8080/file/upload"
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </>
  );
}
function FileCard(props) {
  const file = props.file;
  return (
    <>
      <Image
        width={200}
        src={`http://localhost:8080/file/image/${file.id}`}
      ></Image>
    </>
  );
}
function Hello() {
  return (
    <>
      <PictureWall></PictureWall>
    </>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Hello></Hello>
  </React.StrictMode>,
  document.getElementById("root")
);

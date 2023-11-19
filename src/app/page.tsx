"use client";

import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;

//ここをいじればいいはず
//https://ant.design/components/upload#api
const handleBeforeUpload = (file: RcFile, fileList: RcFile[]) => {
  const reader = new FileReader();
  reader.onload = (e: ProgressEvent<FileReader>) => {
    //多分ファイルの生データが入ってる
    console.log("File content:", e.target?.result);
  };
  message.info(`${file.name} file read successfully`);

  // ファイルをサーバーにアップロードしない
  return false;
};

const props: UploadProps = {
  beforeUpload: handleBeforeUpload,
  name: "file",
  multiple: false,
  onDrop(e: { dataTransfer: { files: any } }) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const App: React.FC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </Dragger>
  </div>
);

export default App;

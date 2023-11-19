"use client";

import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import React, { useState, useEffect } from "react";

const { Dragger } = Upload;

const App: React.FC = () => {
  const [fileContent, setFileContent] = useState<string | null>(null);

  //ここをいじればいいはず
  //https://ant.design/components/upload#api
  const handleBeforeUpload = (file: RcFile, fileList: RcFile[]) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      //多分ファイルの生データが入ってる
      console.log("File content:", e.target?.result);
    };
    setFileContent("終了しました！");
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

  useEffect(() => {
    if (fileContent !== null) {
      //画像の処理が終わったらここにhookする
      message.success("終了しました！");
    }
  }, [fileContent]); // 依存配列に fileContent を指定

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>{fileContent ?? "ファイルをアップロードしてください"}</h1>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
    </div>
  );
};

export default App;

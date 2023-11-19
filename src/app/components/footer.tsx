"use client";

import { Layout } from "antd";
const { Footer } = Layout;
export default function GlobalFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#f0f0f0",
        color: "#000",
      }}
    >
      Copyright © 2023~ usabit. inc
    </Footer>
  );
}

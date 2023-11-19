"use client";

import { Layout, ConfigProvider } from "antd";
import theme from "../theme/headerThemeConfig";
const { Header } = Layout;
export default function GlobalHeader() {
  return (
    <ConfigProvider theme={theme}>
      <Header
        style={{
          paddingRight: "24px",
          display: "flex",
          alignItems: "center",
          color: "#fff",
        }}
      >
        うさまんのお使い
      </Header>
    </ConfigProvider>
  );
}

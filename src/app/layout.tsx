import React from "react";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "../lib/AntdRegistry";

import "./globals.css";
import GlobalFooter from "./components/footer";
import GlobalHeader from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "うさまんのお使い",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="ja">
    <head />
    <body>
      <GlobalHeader />
      {children}
      <GlobalFooter />
    </body>
  </html>
);

export default RootLayout;

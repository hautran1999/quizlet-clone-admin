import React from "react";
import { Layout } from "antd";
import "./Main.scss";
const { Content } = Layout;

const Main = ({ children }) => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "56px 0px 0px 0px",
        padding: 24,
        minHeight: 280,
      }}
    >
      {children}
    </Content>
  );
};

export default Main;

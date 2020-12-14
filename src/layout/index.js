import React, { useState } from "react";
import { Layout } from "antd";
import SideBar from "./SideBar";
import Navigation from "./Navigation";
import Main from "./Main";
import "./AppLayout.scss";

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <SideBar collapsed={collapsed} />
      <Layout
        className="site-layout"
        style={{ marginLeft: collapsed ? 80 : 200 }}
      >
        <Navigation collapsed={collapsed} toggle={toggle} />
        <Main>{children}</Main>
      </Layout>
    </Layout>
  );
};
export default AppLayout;

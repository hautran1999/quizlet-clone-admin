import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  OrderedListOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./SideBar.scss";

const { Sider } = Layout;

const SideBar = (props) => {
  const [collapsed, setCollapsed] = useState(props.collapsed);

  useEffect(() => {
    setCollapsed(props.collapsed);
  }, [props.collapsed]);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div className="logo"></div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<OrderedListOutlined />}>
          <Link to="/flashcards">Flashcards</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UploadOutlined />}>
          Upload
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;

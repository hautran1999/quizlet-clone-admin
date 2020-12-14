import React, { useState, useEffect, Fragment } from "react";
import { Layout, Avatar, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./Navigation.scss";
const { Header } = Layout;
const { SubMenu } = Menu;

const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(props.collapsed);

  useEffect(() => {
    setCollapsed(props.collapsed);
  }, [props.collapsed]);

  return (
    <Header
      theme="dark"
      style={{ padding: 0, position: "fixed", zIndex: 1, width: "100%" }}
    >
      <Menu theme="dark" mode="horizontal">
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: props.toggle,
          }
        )}
        <SubMenu
          style={{ float: "right", marginRight: collapsed ? 80 : 200 }}
          title={
            <Fragment>
              <span style={{ color: "#999", marginRight: 4 }}>Hi,</span>
              <span>Asimo</span>
              <Avatar style={{ marginLeft: 8 }}>A</Avatar>
            </Fragment>
          }
        >
          <Menu.Item key="SignOut">Sign out</Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
};

export default Navigation;

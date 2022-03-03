import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const TopMenu = () => {
  const { pathname } = useLocation();

  return (
    <Menu
      selectedKeys={[pathname]}
      mode="horizontal"
      style={{ marginBottom: "50px" }}
    >
      <Menu.Item key="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/create-post">
        <Link to="/create-post">Create Post</Link>
      </Menu.Item>
      <Menu.Item key="/alluser">
        <Link to="/alluser">All User</Link>
      </Menu.Item>
    </Menu>
  );
};

export default TopMenu;

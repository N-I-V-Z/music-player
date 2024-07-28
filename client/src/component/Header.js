import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Header = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="music-player">
        <Link to="/">Music Player</Link>
      </Menu.Item>
      <Menu.Item key="upload-music">
        <Link to="/upload">Upload Music</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;

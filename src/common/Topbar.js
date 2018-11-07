import React, { Component } from "react";
import { Layout } from "antd";

const { Header } = Layout;

class Topbar extends Component {
  render() {
    const { toggleCollapsed } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: "lightgrey",
      position: "fixed",
      width: "100%",
      height: 60
    };
    return (
      <Header
        style={styling}
        className={collapsed ? "teoTopbar collapsed" : "teoTopbar"}
      >
        <div className="teoLeft">
          <button
            className={
              collapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
            }
            style={{ color: "black" }}
            onClick={toggleCollapsed}
          />
        </div>

        <ul className="teoRight">
          <li
            onClick={() => this.setState({ selectedItem: "user" })}
            className="teoUser"
          />
        </ul>
      </Header>
    );
  }
}

export default Topbar;

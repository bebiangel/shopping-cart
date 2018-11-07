import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";

import Topbar from "../common/Topbar";
import AppRouter from "../routers/AppRouter";
const { Content, Footer } = Layout;

class LayoutWrapper extends Component {
  //
  render() {
    //
    const { url } = this.props.match;
    const appHeight = window.innerHeight;

    return (
      <Layout style={{ height: appHeight }}>
        <Topbar url={url} />
        <Layout style={{ flexDirection: "row", overflowX: "hidden" }}>
          <Layout className="teoContentMainLayout">
            <Content
              className="teoContent"
              style={{
                padding: "60px 0 0",
                flexShrink: "0",
                background: "#F0F0F0",
                position: "relative"
              }}
            >
              <AppRouter url={url} />
            </Content>
            <Footer
              style={{
                background: "#ffffff",
                textAlign: "center",
                borderTop: "1px solid #ededed"
              }}
            />
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutWrapper;

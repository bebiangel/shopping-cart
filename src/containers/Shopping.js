import React, { Component } from "react";
import "./Shopping.css";
import Itmes from "../components/Items";
import Cart from "../components/Cart";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;
class Shopping extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //
    return (
      <Layout style={{ padding: "0 24px 24px" }}>
        <Header />
        <h2 style={{ margin: "1rem" }}>상품목록</h2>
        <div className="Shopping">
          <Itmes />
        </div>
      </Layout>
    );
  }
}

export default Shopping;

import React, { Component } from "react";
import "./Shopping.css";
import Itmes from "../components/Items";
import Cart from "../components/Cart";
import { Layout, Badge, Icon, Row, Col } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import actions from "../store/cart/actions";
import { ModalPop } from "../common/ModalPop";

const { Header, Content, Footer } = Layout;

class Shopping extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {};
  }

  onAddToCart = () => {
    ModalPop.confirm({});
    if (!this.validateAddToCart) return;
  };
  onChangeSize = value => {
    console.log(value);
  };
  onChangeColor = e => {
    console.log(e);
  };
  onChangeQuantity = value => {
    console.log(value);
  };

  validateAddToCart() {}

  render() {
    //
    return (
      <Layout style={{ padding: "0 24px 24px" }}>
        <Header style={{ backgroundColor: "#4dabf7" }}>
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "right",
                  alignItems: "center"
                }}
              >
                <Badge count={5} dot>
                  <Icon
                    type="shopping-cart"
                    theme="outlined"
                    style={{ fontSize: "30px" }}
                  />
                </Badge>
              </div>
            </Col>
          </Row>
        </Header>
        <h2 style={{ margin: "1rem" }}>상품목록</h2>
        <div className="Shopping">
          <Itmes
            items={this.props.item.list}
            formItems={this.props.item.formList}
            onAddToCart={this.onAddToCart}
            onChangeSize={this.onChangeSize}
            onChangeColor={this.onChangeColor}
            onChangeQuantity={this.onChangeQuantity}
          />
        </div>
      </Layout>
    );
  }
}

const stateToProps = state => ({
  item: state.item,
  cart: state.cart
});

const dispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  stateToProps,
  dispatchToProps
)(Shopping);

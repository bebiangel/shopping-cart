import React, { Component } from "react";
import "./Shopping.css";
import Itmes from "../components/Items";
import Cart from "../components/Cart";
import { Layout, Badge, Icon, Row, Col, Modal } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import cartActions from "../store/cart/actions";
import itemActions from "../store/item/actions";

const { Header, Content, Footer } = Layout;

class Shopping extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {};
  }

  onAddToCart = () => {
    // console.log(Modal);
    Modal.confirm({
      title: "Do you Want to delete these items?",
      content: "Some descriptions",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
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
        <Header
          style={{
            backgroundColor: "#4dabf7"
          }}
        >
          <Row
            style={{
              display: "flex",
              margin: "auto",
              width: "60%"
            }}
          >
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "right",
                  alignItems: "right"
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
        <div className={"Title"}>
          <h2>상품목록</h2>
        </div>
        <div className="Shopping">
          <Itmes
            items={this.props.item.list}
            formItems={this.props.item.formList}
            onAddToCart={this.onAddToCart}
            onChangeSize={this.onChangeSize}
            onChangeColor={this.props.itemActions.onChangeColor}
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
  cartActions: bindActionCreators(cartActions, dispatch),
  itemActions: bindActionCreators(itemActions, dispatch)
});

export default connect(
  stateToProps,
  dispatchToProps
)(Shopping);

import React, { Component } from "react";
import "./Shopping.css";
import Itmes from "../components/Items";

import { Layout, Badge, Icon, Row, Col, Modal } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import cartActions from "../store/cart/actions";
import itemActions from "../store/item/actions";
import { fetchList } from "../store/item/api";

const { Header, Content, Footer } = Layout;

class Shopping extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //
    console.log(this.props.itemActions.fetchList());
    // fetchList();
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
      <Layout>
        <div className={"Title"}>
          <h2>상품목록</h2>
        </div>
        <Row>
          <Col span={14} offset={5}>
            <Itmes
              items={this.props.item.list}
              formItems={this.props.item.formList}
              onAddToCart={this.onAddToCart}
              onChangeSize={this.onChangeSize}
              onChangeColor={this.props.itemActions.onChangeColor}
              onChangeQuantity={this.onChangeQuantity}
            />
          </Col>
        </Row>
        <div className="Shopping" />
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

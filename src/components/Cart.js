import React, { Component } from "react";
import "./Cart.css";

class Cart extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Cart">
        <h2>장바구니</h2>
      </div>
    );
  }
}

export default Cart;

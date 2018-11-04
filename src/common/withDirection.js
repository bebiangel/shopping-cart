import React, { Component } from "react";

const rtl = document.getElementsByTagName("html")[0].getAttribute("dir");

const withDirection = Component => {
  return class extends Component {
    //
    render() {
      return <Component {...this.props} data-rtl={rtl} />;
    }
  };
};

export default withDirection;
export { rtl };

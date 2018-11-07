import React from "react";
import { Layout } from "antd";
const Header = Layout.Header;

export default props => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

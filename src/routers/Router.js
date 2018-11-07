import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import LayoutWrapper from "../common/LayoutWrapper";
import Main from "../containers/Main";

function PublicRoutes({ component: Component, ...rest }) {
  return <Route {...rest} render={props => <Component {...props} />} />;
}

export default PublicRoutes;

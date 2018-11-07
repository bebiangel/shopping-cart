import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from "../common/AsyncFunc";

const routes = [
  {
    path: "/shopping",
    component: asyncComponent(() => import("../containers/Shopping"))
  },
  {
    path: "/cart",
    component: asyncComponent(() => import("../containers/Shopping"))
  },
  {
    path: "*",
    component: asyncComponent(() => import("../common/404"))
  }
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;

    return (
      <Switch style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;

          return (
            <Route
              exact={exact === false ? false : true}
              key={path}
              path={`${url}/${path}`}
              {...otherProps}
            />
          );
        })}
      </Switch>
    );
  }
}

export default AppRouter;

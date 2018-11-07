import React from "react";
import { Provider } from "react-redux";
import Shopping from "./containers/Shopping";
import Cart from "./components/Cart";
import { ThemeProvider } from "styled-components";
import "antd/dist/antd.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { store, history } from "./store/store";

import { Layout } from "antd";
import PublicRoutes from "./routers/Router";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/shopping" component={Shopping} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;

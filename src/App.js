import React from "react";
import { Provider } from "react-redux";
import Shopping from "./containers/Shopping";
import "antd/dist/antd.css";
import store from "./store/index";

const App = () => {
  return (
    <Provider store={store}>
      <Shopping />
    </Provider>
  );
};

export default App;

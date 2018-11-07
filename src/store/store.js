import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createHistory from "history/createBrowserHistory";
import thunk from "redux-thunk";
import cartReducer from "./cart/reducers";
import itemReducer from "./item/reducers";

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [
  thunk,
  routeMiddleware
  /* logger */
];

// create store
const store = createStore(
  // combine reducers
  combineReducers({
    item: itemReducer,
    cart: cartReducer,
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store, history };

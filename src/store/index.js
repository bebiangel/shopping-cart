import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createHistory from "history/createBrowserHistory";
import thunk from "redux-thunk";
import reducers from "./reducers";

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware /* logger */];

// create store
const store = createStore(
  // combine reducers
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store, history };

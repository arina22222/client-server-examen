// frontend/src/Root.js

import React from "react";
import {thunk} from "redux-thunk";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { Router } from "react-router-dom"; // Import Router from react-router-dom instead of connected-react-router
import rootReducer from "./Reducer";

const Root = ({ children, initialState = {} }) => {
  const history = createBrowserHistory();
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );

  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};

export default Root;

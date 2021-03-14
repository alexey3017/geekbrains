import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Router from "./Router";

import "./scss/app.scss";

import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

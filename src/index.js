import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardState from "./Context/DashboardState";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DashboardState>
        <App />
      </DashboardState>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardState from "./Context/DashboardState";
import { Provider } from "react-redux";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import store from "./redux/store/store";

import "react-toastify/dist/ReactToastify.css";

const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <DashboardState>
          <App />
        </DashboardState>
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);

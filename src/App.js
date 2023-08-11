import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import DashboardUI from "./pages/UI/DashboardUI";

function App() {
  return (
    <>
      <Router>
        <DashboardUI />
      </Router>
    </>
  );
}

export default App;

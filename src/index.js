import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter ,BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HashRouter  basename='/'>
      <App />
    </HashRouter>
  </>
);

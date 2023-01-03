import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter ,BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </>
);

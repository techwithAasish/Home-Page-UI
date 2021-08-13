import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvoder } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvoder>
      <App />
    </AppProvoder>
  </React.StrictMode>,
  document.getElementById("root")
);

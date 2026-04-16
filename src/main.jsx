// starts the app

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// takes over the "root" div in index.html and renders the app inside it
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* show whatever App.jsx returns */}
  </React.StrictMode>
);
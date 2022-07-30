import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Favicon from "react-favicon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Favicon url="https://ecoplus-assets.s3.us-east-2.amazonaws.com/images/site/favicon.ico" />
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

// React element
// IN react we use className palce of class
const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello react"
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);

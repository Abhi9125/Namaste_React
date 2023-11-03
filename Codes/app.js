import React from "react";
import ReactDOM from "react-dom/client";

// React element
// IN react we use className palce of class
const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello react"
);

// JSX -- Jsx is combnation of html and JS but it not html in js.
// jsx --convert> reactElement --convert> HtmlElement.
// babel --> babel is coverter that conver JSX in JS.
// react and JSX both are diffrent thing.
// In JSX we use camelCase to give attribute.
// In JSX we write inside `()` it. if code is multiple line so u must
// write inside `()` but if cde is single line we do not nessary to
// use `()`.
// JSX Syntax
const jsxHeading = (
  <div className="Jsxheading">
    <h1>This is JSX heading</h1>
    <h2>If we want to write mutile line we must use `()`</h2>
  </div>
);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(jsxHeading);

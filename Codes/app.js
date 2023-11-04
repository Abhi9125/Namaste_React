import React from "react";
import ReactDOM from "react-dom/client";

// Learning --
// 1.how to use js code inside reactElement and component
// 2. ReactElement composition
// 3. Different way of composition of react component

// JSX Syntax
// --In last jsxHeading is reactElement
const jsxHeading = (
  <div className="Jsxheading">
    <h2>This is JSX heading</h2>
    <h3>If we want to write mutile line we must use `()`</h3>
  </div>
);

// By using `{}` we can run any js code.
// -- use reactElement is side another reactElement
const compJsx = (
  <div className="Parent-Heading">
    <h1>We composite react element inside another react element.</h1>
    {jsxHeading}
    {500 + 200}
  </div>
);
// -- compose reactElement inside components
const HeadingComp = function () {
  return (
    <div>
      <h1>Composing react element inside component.</h1>
      {compJsx}
    </div>
  );
};

// -- Compose function Component by different type
// -- We can compose react component by using below ways.
const CompElements = () => {
  return (
    <div>
      <p>I am composing recat functional component in different way.</p>
      {HeadingComp()};
      <HeadingComp />
      <HeadingComp></HeadingComp>
    </div>
  );
};
const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(compJsx);
// root.render(<HeadingComp></HeadingComp>);
root.render(<CompElements />);

import React from "react";
import ReactDOM from "react-dom/client";

// JSX -- Jsx is combnation of html and JS but it not html in js.
// jsx --convert> reactElement --convert> HtmlElement.
// babel --> babel is coverter that conver JSX in JS.
// react and JSX both are diffrent thing.
// In JSX we use camelCase to give attribute.
// In JSX we write inside `()` it. if code is multiple line so u must
// write inside `()` but if cde is single line we do not nessary to
// use `()`.
// JSX Syntax
// --In last jsxHeading is reactElement
const jsxHeading = (
  <div className="Jsxheading">
    <h1>This is JSX heading</h1>
    <h2>If we want to write mutile line we must use `()`</h2>
  </div>
);

// -- creating react functionanl component => it is a js function that return JSX.
// we must write First capital letter in component
const HeadingComponent = () => {
  return <h1>I am a react functional component.</h1>;
};

// -- we can also write above line ike below
// const HeadingComponent = () => <h1>I am a react functional component.</h1>

// -- another functional component
const DivComponent = () => {
  return (
    <div>
      <h1>I am h1 heading inside div.</h1>
      <h2>I am h2 heading inside div.</h2>
    </div>
  );
};

// -- Converting above reactElement into ReactComponent
const JsxHeading = () => (
  <div className="Jsxheading">
    <h1>This is JSX heading</h1>
    <h2>If we want to write mutile line we must use `()`</h2>
  </div>
);

// -- Component composition --> when we write a component inside a conponet is know as component composion.
const CompComposition = () => {
  return (
    <div>
      <HeadingComponent />
      <h1>Call a component inside a component.</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.querySelector("#root"));

// We must write react component inside `<>`

// root.render(<HeadingComponent />);
// root.render(<DivComponent />);
// root.render(<JsxHeading />);
root.render(<CompComposition />);

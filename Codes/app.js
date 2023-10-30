/*
Creating the nested element using react 

<div id = "parent">
  <div id = "child">
  <h1>I'm heading 1</h1>
  <h2>I'm heading 2</h2>
</div>

*/

//-- createElement take three argument first is `tag`, `Attribute`, `input that we want to publish`
// if we have nested element and also sibling in it so we use `[]` in third argument
const nested = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 heading"),
    React.createElement("h2", {}, "I'm h2 heading"),
  ])
);

console.log(nested); // object that have `h1` element and some props

//-- ReactDom.createRoot is create a root where all the manipulatio happen.
const root = ReactDOM.createRoot(document.querySelector(".root"));

//-- render method use for render the Dom, and update where the update happen
root.render(nested);

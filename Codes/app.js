/*
Creating the nested element using react 

<div id = "parent">
  <div id = "child1">
    <h1>I'm heading 1</h1>
    <h2>I'm heading 2</h2>
  
  <div id = "child2">
    <h1>I'm heading 1</h1>
    <h2>I'm heading 2</h2>
</div>

</div>

*/
// import react and react-dom from react and react-dom module
import React from "react";
import ReactDOM from "react-dom/client";

//-- createElement take three argument first is `tag`, `Attribute`, `input that we want to publish`
// if we have nested element and also sibling in it so we use `[]` in third argument
// we can also do this type
const heading1 = React.createElement("h1", {}, "I'm heading 1");
const heading2 = React.createElement("h2", {}, "I'm heading 2");
const nested = React.createElement("div", { parent }, [
  React.createElement("div", { id: "child1" }, [heading1, heading2]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm heading 1"),
    React.createElement("h2", {}, "I'm heading 2"),
  ]),
]);

console.log(nested); // object that have `h1` element and some props

//-- ReactDom.createRoot is create a root where all the manipulatio happen.
const root = ReactDOM.createRoot(document.querySelector(".root"));

//-- render method use for render the Dom, and update where the update happen
// --render()only render root other `HTML` will same
root.render(nested);

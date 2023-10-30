//-- createElement take three argument first is `tag`, `Attribute`, `input that we want to publish`
const heading = React.createElement(
  "h1",
  // -- in react we use className instead of class
  { className: "Heading", id: "Heading2" },
  "Hello World! Now I'm start learning react."
);

console.log(heading); // object that have `h1` element and some props

//-- ReactDom.createRoot is create a root where all the manipulatio happen.
const root = ReactDOM.createRoot(document.querySelector(".root"));

//-- render method use for render the Dom, and update where the update happen
root.render(heading);

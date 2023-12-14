import User from "./User";
import UserClass from "./UserClass";
// import React from "react";
// we also destructure the Component onfly.
import { Component } from "react";

// Life Cycle of Class Base Component --> frist constructure() execute --> render() execute -->  componentDidMount() execute
// Now creating About Component by using class
class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructure");
  }

  // Use of componentDidMount for fetching the API work same as Class Base component.
  componentDidMount() {
    console.log("Parent Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>This is about page</h1>
        {/* No call Component with props */}
        <User
          name={"Abhishek Singh (Functional Component)"}
          Location={"Mohali"}
        />
        {/* Calling child class component with props */}
        <UserClass
          name={"Abhishek Singh (Class_Component)"}
          Location={"Mohali"}
        />
      </div>
    );
  }
}
/*
Output--
About.js:13 Parent Constructure
About.js:22 Parent Render
UserClass.js:8 Child Class Constructer
UserClass.js:25 Child Class Render
UserClass.js:20 Child Class didMount
About.js:18 Parent Did Mount
*/

// const About = () => {
//   return (
//     <div>
//       <h1>This is about page</h1>
//       {/* No call Component with props */}
//       <User
//         name={"Abhishek Singh (Functional Component)"}
//         Location={"Mohali"}
//       />
//       {/* Calling class component with props */}
//       <UserClass
//         name={"Abhishek Singh (Class_Component)"}
//         Location={"Mohali"}
//       />
//     </div>
//   );
// };
export default About;

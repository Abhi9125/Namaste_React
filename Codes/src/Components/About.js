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
        {/* Calling child class component with props */}
        {/* Calling multple chaild class, calling classComponent means makign the instance of the class */}
        <UserClass name={"Fisrt"} Location={"Mohali"} />
        <UserClass name={"Second"} Location={"Varanasi"} />
        <UserClass name={"Third"} Location={"Lucknow"} />
      </div>
    );
  }
}
/****
 *Expected Output--
 * Parent Constructor
 * Parent Render
 * First Child class Constroctor
 * First child render
 * First Child class didMount
 * Second Child class Constroctor
 * Second child render
 * Second Child class didMount
 * Parent didMount.
 */

/*****
  * But Actual Output is below, 
 * Parent Constructor
 * Parent Render
 * First Child class Constroctor 
 * First child render 
 * Second Child class Constroctor 
 * Second child render
 * Third Child class Constroctor 
 * Third child render
 * First Child class didMount 
 * Second Child class didMount
 * Third Child class didMount 
 * Parent didMount.
 * OutPut come this order bcz of Life Cycle of class Componetn - it hadden in two phase (1) -- Render() phase, (2) -- Commit Phase. 
 
 */
export default About;

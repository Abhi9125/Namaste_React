import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default Name",

  inputValue: "Default_Value",
});

export default UserContext;

/****
 * We create Context to access the data any where in our app.
 * For accessing the context we in any compont
 * 1. we import the useContext hook and create context component.
 * 2.Then we pass component where we create the context like == useContext(UserContext)
 *
 */

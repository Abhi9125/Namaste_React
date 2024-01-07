import { fireEvent, render, screen } from "@testing-library/react";
import HeaderCom from "../HeaderCom";
import { Provider } from "react-redux";
import appStore from "../../utility/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Test Case -- 1
it("Should load Header component with login button", () => {
  /**If we run only header component without any testing it throw an bcz in
   * header component we use routing and redux for solving the error
   * we import provider and browserRouter
   */
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderCom />
      </Provider>
    </BrowserRouter>
  );
  // Quering
  const loginButton = screen.getByRole("button", { btnNameReact: "Login" });

  //   Assersion
  //   import the "@testing-library/jest-dom" to execute toBeInTheDocument.
  expect(loginButton).toBeInTheDocument();
});

// Test Case -- 2
it("Should load header Component with Cart-0 items", () => {
  // render

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderCom />
      </Provider>
    </BrowserRouter>
  );

  //   Quering
  const cartItems = screen.getByText("Cart - (0 Items)");

  // Asserstion

  expect(cartItems).toBeInTheDocument();
});

// Test Case -- 3
it("Should change Login button to log out on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderCom />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { btnNameReact: "Login" });

  //   importing fireEvent from React -Testing-Library to fire a Event
  fireEvent.click(loginButton);

  const logOutButton = screen.getByRole("button", { btnNameReact: "Logout" });

  //   Assertion
  expect(logOutButton).toBeInTheDocument();
});

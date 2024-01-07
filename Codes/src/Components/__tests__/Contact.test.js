import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
// import this for toBeInDocument
import "@testing-library/jest-dom";

/***
 * We can write the test cases in seprate block with the help of describe();
 * Syantex of describe
 * describe("Group desrpiption", callback>)
 *
 * *** We can use `it` place `test` both are same.
 */

describe("Contactus component test cases", () => {
  it("should load contact us component", () => {
    // To render JSX in testing we install @babel/preset-react
    render(<Contact />);

    //   screen is an object that com @testing-library/react
    const heading = screen.getByRole("heading");

    //   Assertion
    expect(heading).toBeInTheDocument();
  });

  // Test Case - 2 Checkig whether button element is present or not

  it("should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  // Test Case -- 3 Checking whether button element with name submit is present or not

  it("should load button with name submit inside contact us component", () => {
    render(<Contact />);

    const btnName = screen.getByText("Submit"); // Case sensitive

    expect(btnName).toBeInTheDocument();
  });

  it("should load button with name submit inside contact us component", () => {
    render(<Contact />);

    const btnName = screen.getByText(/submit/i); // This (/submit/i) line is a regular expression,

    expect(btnName).toBeInTheDocument();
  });

  // Test Case - 4 -- Checking whether input element with a specific placeholder name exists or not

  it("should load input text with placeholder name", () => {
    render(<Contact />);

    const inputByPlaceholder = screen.getByPlaceholderText("Enter Name");

    expect(inputByPlaceholder).toBeInTheDocument();
  });

  // Test Case - 5 -- Checking whether multiple input elements exist or not
  it("should load 2 input text input element inside contact us component", () => {
    render(<Contact />);

    const inputelememt = screen.getAllByRole("textbox"); // Not use input use textbox

    // console.log(inputelememt);
    expect(inputelememt.length).toBe(2);
  });
});

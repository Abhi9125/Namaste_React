import { render, screen } from "@testing-library/react";
import RescartCom from "../RescartCom";
import Mock_Data from "../Mock/mockData.json";
import "@testing-library/jest-dom";
// Test the RescartCom and learn how to pass the props from test time.
it("Test the RescartCom", () => {
  render(<RescartCom resData={Mock_Data} />);

  //   Quering

  const Name = screen.getByRole("heading", { name: "Burger King" });

  // Assertion
  expect(Name).toBeInTheDocument();
});

// Do H.w

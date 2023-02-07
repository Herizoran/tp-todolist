import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  test("should display the heading and input field", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const heading = getByText("TODOLIST");

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const inputField = getByPlaceholderText("Enter Task");

    expect(heading).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });

  test("should update the value of the input field", () => {
    const { getByPlaceholderText } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const inputField = getByPlaceholderText("Enter Task");

    fireEvent.change(inputField, { target: { value: "Test task" } });

    // @ts-ignore
    expect(inputField.value).toBe("Test task");
  });
});

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "../App";

describe("App List", () => {
  test("user can add new items to the to-do list", () => {
    const { getByTestId, queryAllByTestId } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = getByTestId("todo-input");

    fireEvent.change(input, { target: { value: "New Item" } });
    fireEvent.submit(input);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(queryAllByTestId("todo-item").length).toBe(1);
  });
});
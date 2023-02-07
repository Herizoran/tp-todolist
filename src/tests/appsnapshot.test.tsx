import React from "react";
import { cleanup, render } from "@testing-library/react";
import App from "../App";

afterEach(cleanup);
describe("App Snapshot", () => {
  test("TodoList component matches snapshot", () => {
    const { asFragment } = render(<App />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
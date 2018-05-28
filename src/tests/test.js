import React from "react";
import {
  renderIntoDocument,
  cleanup,
  Simulate,
  render,
  wait,
  fireEvent
} from "react-testing-library";

import ReactFileLoad from "../index";

describe("ExampleComponent", () => {
  it("should render", () => {
    render(<ReactFileLoad text="x" />);
  });

  it("should have correct default finish color", async () => {
    const { getByLabelText, getByText, debug } = render(
      <ReactFileLoad text="My label text" />
    );

    const fileInputField = getByLabelText("My label text");

    const file = new File(
      [
        "Chuck Norris once urinated in a semi truck's gas tank as a joke. That truck is now known as Optimus Prime."
      ],
      "chucknorris.txt"
    );
    Simulate.change(fileInputField, { target: { files: [file] } });

    await wait(() => {
      getByLabelText("My label text");
    });

    const label = getByText("My label text");
    expect(label.style.background).toBe("rgb(44, 88, 136)"); // 'rgb(44, 88, 136)' == #2c5888
  });

  it("should load file data", async () => {

    
  });

  it("should call progress callback", async () => {


  });

  it("should show progress visually", async () => {


  });

  it("should respect readery configS", async () => {


  });
});

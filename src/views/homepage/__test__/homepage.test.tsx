import React from "react";

import { render } from "~/utils/test-utils";

import Homepage from "../homepage";

describe("homepage render", () => {
  it("match with snapshot", () => {
    const { baseElement } = render(<Homepage />);
    expect(baseElement).toMatchSnapshot();
  });
});

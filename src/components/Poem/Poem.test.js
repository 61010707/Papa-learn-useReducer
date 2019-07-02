import React from "react";
import { shallow } from "enzyme";

import Poem from "./index.js";

describe("Poem", () => {
  it("should render ", () => {
    const component = shallow(<Poem />);
    expect(component).toMatchSnapshot();
  });
});

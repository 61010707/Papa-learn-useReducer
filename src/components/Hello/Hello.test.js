import React from "react";
import { shallow, mount, render } from "enzyme";

import Hello from "./index";

describe("Hello", () => {
  it("should render ", () => {
    const component = shallow(<Hello />);
    expect(component).toMatchSnapshot();
  });

  it("should mount", () => {
    const component = mount(<Hello />);
    expect(component).toMatchSnapshot();
  });

  it("should render", () => {
    const component = render(<Hello />);
    expect(component).toMatchSnapshot();
  });
});

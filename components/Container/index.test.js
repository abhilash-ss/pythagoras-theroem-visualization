import React from "react";
import { shallow } from "enzyme";
import Container from "./index";

describe("Container", () => {
  let props;
  beforeEach(() => {
    props = {
      children: <div></div>
    };
  });
  it("should render without crash", () => {
    const component = shallow(<Container {...props} />);
    expect(component).toMatchSnapshot();
  });
});

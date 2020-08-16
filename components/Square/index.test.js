import React from "react";
import { shallow } from "enzyme";
import Square from "./index";

describe("Square", () => {
  let props;
  beforeEach(() => {
    props = {
      size: 5,
      type: "base"
    };
  });
  it("should render without crash", () => {
    const component = shallow(<Square {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should render without type hypotenuse", () => {
    props.type = "hypotenuse";
    const component = shallow(<Square {...props} />);
    expect(component).toMatchSnapshot();
  });
});

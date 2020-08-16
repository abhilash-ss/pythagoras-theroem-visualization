import React from "react";
import { shallow } from "enzyme";
import Alert from "./index";

describe("Alert", () => {
  let props;
  beforeEach(() => {
    props = {
      message: "error message"
    };
  });
  it("should render without crash", () => {
    const component = shallow(<Alert {...props} />);
    expect(component).toMatchSnapshot();
  });
});

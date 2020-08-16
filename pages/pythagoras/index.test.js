import React from "react";
import { shallow } from "enzyme";
import Pythagoras from "./index";

jest.mock("next/router", () => ({
  withRouter: (component) => component
}));

describe("Pythagoras", () => {
  let props;
  beforeEach(() => {
    props = {
      router: {
        push: jest.fn(),
        query: { a: 3, b: 4, c: 5 }
      }
    };
  });
  it("should render without crash", () => {
    const component = shallow(<Pythagoras {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should render with params", () => {
    props.router.query = { a: 4, b: 3, c: 5 };
    const component = shallow(<Pythagoras {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should render without params", () => {
    props.router.query = {};
    const component = shallow(<Pythagoras {...props} />);
    expect(component).toMatchSnapshot();
  });
});

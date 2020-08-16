import React from "react";
import { shallow } from "enzyme";
import { withRouter } from "next/router";
import Home from "./index";

jest.mock("next/router", () => ({
  withRouter: (component) => component
}));

describe("Home", () => {
  let props;
  beforeEach(() => {
    props = {
      router: {
        push: jest.fn()
      }
    };
  });
  it("should render without crash", () => {
    const component = shallow(<Home {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should handle error case", () => {
    const component = shallow(<Home {...props} />);
    const errorMsg = "Enter the sides of triangles ang click to see";
    component
      .find("input")
      .at(0)
      .props()
      .onChange({ target: { value: "onChange" } });

    component
      .find("input")
      .at(1)
      .props()
      .onChange({ target: { value: "onChange" } });

    component
      .find("input")
      .at(2)
      .props()
      .onChange({ target: { value: "onChange" } });

    component.find("button").props().onClick();

    const text = component.find("p").text();
    expect(text).toEqual(errorMsg);
  });

  it("should handle success case", () => {
    const component = shallow(<Home {...props} />);
    component
      .find("input")
      .at(0)
      .props()
      .onChange({ target: { value: "3" } });

    component
      .find("input")
      .at(1)
      .props()
      .onChange({ target: { value: "4" } });

    component
      .find("input")
      .at(2)
      .props()
      .onChange({ target: { value: "5" } });

    component.find("button").props().onClick();
    expect(props.router.push).toHaveBeenCalled();
  });

  it("should handle success case", () => {
    const component = shallow(<Home {...props} />);
    component.find("button").props().onClick();
    expect(props.router.push).not.toHaveBeenCalled();
  });
});

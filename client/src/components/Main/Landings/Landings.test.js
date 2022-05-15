import React from "react";
import { shallow } from "enzyme";
import Landings from "./LandingsList";

describe("Landings", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Landings />);
    expect(wrapper).toMatchSnapshot();
  });
});

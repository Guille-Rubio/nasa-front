import React from "react";
import { shallow } from "enzyme";
import Pages from "./Pages";

describe("Pages", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pages />);
    expect(wrapper).toMatchSnapshot();
  });
});

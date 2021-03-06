import React from "react";
import { mount } from "enzyme";

import InfoSheet from "../InfoSheet";

describe("InfoSheet testing", () => {

  it("Renders InfoSheets's passed description", () => {

    const data = {
      "first flight": "2012-05-12",
      "country": "UK"
    };

    let wrapper = mount(<InfoSheet data={data} />);

    expect(wrapper.text()).toContain(data["first flight"]);
    expect(wrapper.text()).toContain(data.country);
  });
});

import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CountryListItem from "components/CountryListItem";
import { countryData } from "utils/mock-common-data";

let getByTestId: any;
describe("CountryList Component Tests", () => {
  beforeEach(() => {
    ({ getByTestId } = render(
      <Router>
        <CountryListItem
          data={countryData}
          setShowDetails={true}
          setDetailData={[]}
        />
      </Router>
    ));
  });

  it("displays Client title correctly", () => {
    expect(getByTestId("id-country-name")).toHaveTextContent(
      "Republic of the Congo"
    );
  });

  it("displays customer name correctly", () => {
    expect(getByTestId("id-country-population")).toHaveTextContent("5657000");
  });

  it("displays customer address correctly", () => {
    expect(getByTestId("id-country-region")).toHaveTextContent("Africa");
  });

  it("displays customer city correctly", () => {
    expect(getByTestId("id-country-capital")).toHaveTextContent("Brazzaville");
  });
});

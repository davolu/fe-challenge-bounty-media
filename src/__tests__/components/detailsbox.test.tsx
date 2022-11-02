import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import DetailsBox from "../../components/DetailsBox";
import { BrowserRouter as Router } from "react-router-dom";
import { countryData } from "../../utils/mock-common-data";

let getByTestId: any;
let isActive: boolean = false;
let aCountryIsActive: boolean = false;

const updateCountry = () => {};
const makeActive = () => {};
describe("DetailsBox Component Tests", () => {
  beforeEach(() => {
    ({ getByTestId } = render(
      <Router>
        <DetailsBox
          countryData={countryData}
          isActive={isActive}
          aCountryIsActive={aCountryIsActive}
          updateCountry={updateCountry()}
          makeActive={makeActive}
        />
      </Router>
    ));
  });

  it("displays customer name correctly", () => {
    expect(getByTestId("details-customer-name")).toHaveTextContent(
      "Mr. Chris Dach"
    );
  });

  it("displays customer address correctly", () => {
    expect(getByTestId("details-customer-address")).toHaveTextContent(
      "1739 Andreane Court"
    );
  });

  it("displays customer city correctly", () => {
    expect(getByTestId("details-customer-city")).toHaveTextContent("Miramar");
  });

  it("displays customer city correctly", () => {
    expect(getByTestId("details-customer-city")).toHaveTextContent("Miramar");
  });

  it("make active button works", () => {
    fireEvent.click(getByTestId("make-active-button"));
  });
});

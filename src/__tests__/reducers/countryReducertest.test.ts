import React from "react";
import {
  FETCH_COUNTRIES,
  SET_LOADING,
  SET_ERROR,
  CountryListData,
} from "../../store/country/types";
import countryReducer from "../../store/country/reducer";

const initialState = {
  data: null,
  loading: false,
  error: "",
};
describe("countryReducer test", () => {
  it("returns the initial state", () => {
    expect(countryReducer(undefined, {})).toEqual(initialState);
  });

  it("handles   loading ", () => {
    expect(countryReducer(initialState, { type: SET_LOADING })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("handles error  ", () => {
    expect(
      countryReducer(initialState, { type: SET_ERROR, payload: "" })
    ).toEqual({
      ...initialState,
      loading: false,
    });
  });

  it("handles country fetch loading ", () => {
    expect(
      countryReducer(initialState, { type: FETCH_COUNTRIES, payload: null })
    ).toEqual({
      ...initialState,
      loading: false,
    });
  });
});

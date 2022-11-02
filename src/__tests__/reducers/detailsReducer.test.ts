import React from "react";
import {
  GET_DELIVERY_DETAILS,
  SET_LOADING,
  SET_ERROR,
} from "../../store/details/types";
import countryDetailsReducer from "../../store/details/reducer";

const initialState = {
  data: null,
  loading: false,
  error: "",
};
describe("countryDetailsReducer test", () => {
  it("returns the initial state", () => {
    expect(countryDetailsReducer(undefined, {})).toEqual(initialState);
  });

  it("handles   loading ", () => {
    expect(countryDetailsReducer(initialState, { type: SET_LOADING })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("handles error  ", () => {
    expect(
      countryDetailsReducer(initialState, { type: SET_ERROR, payload: "" })
    ).toEqual({
      ...initialState,
      loading: false,
    });
  });

  it("handles country fetch loading ", () => {
    expect(
      countryDetailsReducer(initialState, {
        type: GET_DELIVERY_DETAILS,
        payload: null,
      })
    ).toEqual({
      ...initialState,
      loading: false,
    });
  });
});

import { ThunkAction } from "redux-thunk";
import CountryDataService from "services/country.service";
import { RootState } from "../";
import {
  FETCH_COUNTRIES,
  CountryAction,
  SET_LOADING,
  SET_ERROR,
} from "./types";

export const getCountryList = (): ThunkAction<
  void,
  RootState,
  null,
  CountryAction
> => {
  return async (dispatch) => {
    try {
      CountryDataService.getListCountry()
        .then((response: any) => {
          dispatch({
            type: FETCH_COUNTRIES,
            payload: response.data,
          });
        })
        .catch((e: Error) => {
          dispatch({
            type: SET_ERROR,
            payload: e.message,
          });
        });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: "",
      });
    }
  };
};

export const setLoading = (): CountryAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): CountryAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};

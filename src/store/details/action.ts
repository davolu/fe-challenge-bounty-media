import { ThunkAction } from "redux-thunk";
import CountryDataService from "../../services/country.service";
import { RootState } from "../";
import {
  GET_DELIVERY_DETAILS,
  CountryDetailsAction,
  UpdateCountryData,
  SET_LOADING,
  SET_ERROR,
} from "./types";

export const getCountryDetails = (
  id: string
): ThunkAction<void, RootState, null, CountryDetailsAction> => {
  return async (dispatch) => {
    try {
      CountryDataService.getCountryListDetails(id)
        .then((response: any) => {
          dispatch({
            type: GET_DELIVERY_DETAILS,
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

export const UpdateCountryDetails = (
  data: UpdateCountryData,
  id: any
): ThunkAction<void, RootState, null, CountryDetailsAction> => {
  return async (dispatch) => {
    try {
      CountryDataService.updateCountryDetailsStatus(data, id)
        .then((response: any) => {
          dispatch({
            type: GET_DELIVERY_DETAILS,
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

export const setLoading = (): CountryDetailsAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): CountryDetailsAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};

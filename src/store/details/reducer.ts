import {
  CountryDetailsListState,
  CountryDetailsAction,
  GET_DELIVERY_DETAILS,
  SET_LOADING,
  SET_ERROR,
} from "./types";

const initialState: CountryDetailsListState = {
  data: null,
  loading: false,
  error: "",
};

export default (
  state = initialState,
  action: CountryDetailsAction
): CountryDetailsListState => {
  switch (action.type) {
    case GET_DELIVERY_DETAILS:
      return {
        data: action.payload,
        loading: false,
        error: "",
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

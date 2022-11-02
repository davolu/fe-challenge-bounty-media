import {
  CountryListState,
  CountryAction,
  FETCH_COUNTRIES,
  SET_LOADING,
  SET_ERROR,
} from "./types";

const initialState: CountryListState = {
  data: null,
  loading: false,
  error: "",
};

export default (
  state = initialState,
  action: CountryAction
): CountryListState => {
  switch (action.type) {
    case FETCH_COUNTRIES:
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

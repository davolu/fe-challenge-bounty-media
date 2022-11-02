export const GET_DELIVERY_DETAILS = "GET_DELIVERY_DETAILS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export interface CountryDetailsListData {
  id: string;
  client: string;
  customer: {
    name: string;
    address: string;
    city: string;
    zipCode: string;
    latitude: string;
    longitude: string;
  };
  country: {
    status: "idle" | "delivered" | "undelivered";
    latitude: number;
    longitude: number;
  };
}

export interface UpdateCountryData {
  country: {
    status: string;
    latitude: number;
    longitude: number;
  };
}

export interface CountryDetailsError {
  cod: string;
  message: string;
}
interface GetCountryDetailsListAction {
  type: typeof GET_DELIVERY_DETAILS;
  payload: CountryDetailsListData | null;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}
interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}
export type CountryDetailsAction =
  | GetCountryDetailsListAction
  | SetLoadingAction
  | SetErrorAction;

export interface CountryDetailsListState {
  data: CountryDetailsListData | null;
  loading: boolean;
  error: string;
}

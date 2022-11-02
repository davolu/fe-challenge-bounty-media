export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

//expected data format from REST API
export interface CountryListData {
  name: {
    common: string;
    official: string;
    nativeName: object;
  };
  tld: object;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: object;
  idd: object;
  capital: object;
  altSpellings: object;
  region: string;
  subregion: string;
  languages: {};
  translations: object;
  latlng: object;
  landlocked: boolean;
  borders: object;
  area: number;
  demonyms: object;
  flag: string;
  maps: object;
  population: number;
  gini: object;
  fifa: string;
  car: object;
  timezones: object;
  continents: object;
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: object;
  startOfWeek: string;
  capitalInfo: object;
}

export interface CountryError {
  cod: string;
  message: string;
}
interface GetCountryListAction {
  type: typeof FETCH_COUNTRIES;
  payload: CountryListData[] | null;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}
interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}
export type CountryAction =
  | GetCountryListAction
  | SetLoadingAction
  | SetErrorAction;

export interface CountryListState {
  data: CountryListData[] | null;
  loading: boolean;
  error: string;
}

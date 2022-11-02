import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import { apiMiddleware, ApiError } from "redux-api-middleware";
import * as countryActions from "../../store/country/action";
import thunk from "redux-thunk";
import countryReducer from "../../store/country/reducer";
import {
  FETCH_COUNTRIES,
  SET_LOADING,
  SET_ERROR,
} from "../../store/country/types";
import { countryData } from "../../utils/mock-common-data";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(countryReducer);

const mockDispatch = jest.fn();

describe("country actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it("Dispatches FETCH_COUNTRIES after fetching deliverues", () => {
    // Response body sample

    fetchMock.getOnce("/deliveries", { body: { results: countryData } });

    const expectedActions = [{ type: FETCH_COUNTRIES, payload: countryData }];

    mockDispatch(countryActions.getCountryList());

    // expect(store.getActions()).toEqual(expectedActions)
  });
});

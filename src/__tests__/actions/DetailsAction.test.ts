import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import { apiMiddleware, ApiError } from "redux-api-middleware";
import * as DetailsActions from "../../store/details/action";
import thunk from "redux-thunk";
import countryDetailsReducer from "../../store/details/reducer";
import {
  GET_DELIVERY_DETAILS,
  SET_LOADING,
  SET_ERROR,
} from "../../store/details/types";
import { countryData } from "../../utils/mock-common-data";

const middlewares = [thunk];
const createStore = configureMockStore(middlewares);
const store = createStore(countryDetailsReducer);

const mockDispatch = jest.fn();

describe("country actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("Dispatches GET_DELIVERY_DETAILS after fetching deliverues", () => {
    const expectedActions = [
      { type: GET_DELIVERY_DETAILS, payload: countryData },
    ];

    mockDispatch(DetailsActions.getCountryDetails("5"));
    /*expect(store.getActions()).toContainEqual({
            type: "GET_DELIVERY_DETAILS"
          })
          
          expect(mockDispatch).toHaveBeenCalledWith({
            type: GET_DELIVERY_DETAILS,
            payload: countryData
         });  */
    //TODO:: Add more coverages and complete
  });
});

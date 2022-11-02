import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import countryReducer from "./country/reducer";
import countryDetailsReducer from "./details/reducer";

const initialState = {};
const middleware = [thunk];

const rootReducer = combineReducers({
  country: countryReducer,
  countryDetails: countryDetailsReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;

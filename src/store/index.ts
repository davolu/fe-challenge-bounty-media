import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import countryReducer from "./country/reducer";

const initialState = {};
const middleware = [thunk];

const rootReducer = combineReducers({
  country: countryReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;

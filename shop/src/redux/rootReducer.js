import { combineReducers } from "redux";

import shopReducer from "./shopReducer/shop-reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;
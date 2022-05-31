import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectedProductReducer } from "./selectedProductReducer";

const rootReducers = combineReducers({
  products: productReducer,
  product: selectedProductReducer,
});

export default rootReducers;

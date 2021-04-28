import { combineReducers } from "redux";
import { ProductListReducer } from "./ProductListReducer";
import { ProductViewReducer } from "./ProductViewReducer";

export default combineReducers({
  productList: ProductListReducer,
  productView: ProductViewReducer,
});

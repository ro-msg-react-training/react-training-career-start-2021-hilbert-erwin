import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { ProductListReducer } from "./ProductListReducer";
import { ProductViewReducer } from "./ProductViewReducer";

export default combineReducers({
  productList: ProductListReducer,
  productView: ProductViewReducer,
  cart: CartReducer,
});

import { all } from "redux-saga/effects";
import { watchCheckoutAsync } from "./CartSaga";
import {
  watchDeleteProductAsync,
  watchFetchProductsAsync,
} from "./ProductListSaga";
import {
  watchFetchProductAsync,
  watchAddProductAsync,
  watchUpdateProductAsync,
} from "./ProductViewSaga";

export default function* rootSaga() {
  yield all([
    watchFetchProductsAsync(),
    watchFetchProductAsync(),
    watchDeleteProductAsync(),
    watchCheckoutAsync(),
    watchAddProductAsync(),
    watchUpdateProductAsync(),
  ]);
}

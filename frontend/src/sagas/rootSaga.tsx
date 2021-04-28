import { all } from "redux-saga/effects";
import {
  watchDeleteProductAsync,
  watchFetchProductsAsync,
} from "./ProductListSaga";
import { watchFetchProductAsync } from "./ProductViewSaga";

export default function* rootSaga() {
  yield all([
    watchFetchProductsAsync(),
    watchFetchProductAsync(),
    watchDeleteProductAsync(),
  ]);
}

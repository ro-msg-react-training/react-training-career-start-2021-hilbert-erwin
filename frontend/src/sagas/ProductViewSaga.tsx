import { takeEvery, put, call } from "redux-saga/effects";
import ProductDetail from "../model/ProductDetail";
import {
  ProductViewActionTypes,
  productViewFetchProductSuccess,
  ProductViewFetchProductAction,
  productViewFetchProductError,
} from "../actions/ProductViewActions";
import { getProductById } from "../api/ProductService";

function* fetchProductAsync(action: ProductViewFetchProductAction) {
  try {
    const result: ProductDetail = yield call(() => getProductById(action.id));
    yield put(productViewFetchProductSuccess(result));
  } catch (e) {
    yield put(productViewFetchProductError());
  }
}

export function* watchFetchProductAsync() {
  yield takeEvery(
    ProductViewActionTypes.PRODUCT_VIEW_FETCH_PRODUCT,
    fetchProductAsync
  );
}

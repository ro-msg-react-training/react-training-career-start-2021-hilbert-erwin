import { takeEvery, put, call } from "redux-saga/effects";
import ProductDetail from "../model/ProductDetail";
import {
  ProductViewActionTypes,
  productViewFetchProductSuccess,
  productViewAddProductSuccess,
  productViewAddProductError,
  productViewUpdateProductSuccess,
  productViewUpdateProductError,
  ProductViewFetchProductAction,
  ProductViewAddProductAction,
  ProductViewUpdateProductAction,
  productViewFetchProductError,
} from "../actions/ProductViewActions";
import { productListAddProduct } from "../actions/ProductListActions";
import {
  getProductById,
  addProduct,
  updateProduct,
} from "../api/ProductService";

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

function* addProductAsync(action: ProductViewAddProductAction) {
  try {
    const result: ProductDetail = yield call(() =>
      addProduct(
        action.name,
        action.category,
        action.description,
        action.image,
        action.price
      )
    );
    yield put(productViewAddProductSuccess());
    yield put(
      productListAddProduct({
        name: action.name,
        category: action.category,
        price: action.price,
        id: result.id,
      })
    );
  } catch (e) {
    yield put(productViewAddProductError());
  }
}

export function* watchAddProductAsync() {
  yield takeEvery(
    ProductViewActionTypes.PRODUCT_VIEW_ADD_PRODUCT,
    addProductAsync
  );
}

function* updateProductAsync(action: ProductViewUpdateProductAction) {
  try {
    yield call(() => updateProduct(action.product));
    yield put(productViewUpdateProductSuccess(action.product));
  } catch (e) {
    yield put(productViewUpdateProductError());
  }
}

export function* watchUpdateProductAsync() {
  yield takeEvery(
    ProductViewActionTypes.PRODUCT_VIEW_UPDATE_PRODUCT,
    updateProductAsync
  );
}

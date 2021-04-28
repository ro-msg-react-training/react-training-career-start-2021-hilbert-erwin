import { takeEvery, put, call } from "redux-saga/effects";
import Product from "../model/Product";
import {
  ProductListActionTypes,
  productListFetchProductsSuccess,
  productListFetchProductsError,
  productListDeleteProductSuccess,
  productListDeleteProductError,
  ProductListDeleteProductSuccessAction,
} from "../actions/ProductListActions";
import { deleteProductById, getAllProducts } from "../api/ProductService";

function* fetchProductsAsync() {
  try {
    const result: Product[] = yield call(() => getAllProducts());
    yield put(productListFetchProductsSuccess(result));
  } catch (e) {
    yield put(productListFetchProductsError());
  }
}

export function* watchFetchProductsAsync() {
  yield takeEvery(
    ProductListActionTypes.PRODUCT_LIST_FETCH_PRODUCTS,
    fetchProductsAsync
  );
}

function* deleteProductAsync(action: ProductListDeleteProductSuccessAction) {
  try {
    yield call(() => deleteProductById(action.id));
    yield put(productListDeleteProductSuccess(action.id));
  } catch (e) {
    yield put(productListDeleteProductError());
  }
}

export function* watchDeleteProductAsync() {
  yield takeEvery(
    ProductListActionTypes.PRODUCT_LIST_DELETE_PRODUCT,
    deleteProductAsync
  );
}

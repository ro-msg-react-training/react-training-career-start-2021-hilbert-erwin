import { takeEvery, put, call } from "redux-saga/effects";
import {
  CartActionTypes,
  cartCheckoutSuccess,
  CartCheckoutAction,
  cartCheckoutError,
} from "../actions/CartActions";
import { createOrder } from "../api/OrderService";

function* checkoutAsync(action: CartCheckoutAction) {
  try {
    yield call(() => createOrder(action.cartItems));
    yield put(cartCheckoutSuccess());
  } catch (e) {
    yield put(cartCheckoutError());
  }
}

export function* watchCheckoutAsync() {
  yield takeEvery(CartActionTypes.CART_CHECKOUT, checkoutAsync);
}

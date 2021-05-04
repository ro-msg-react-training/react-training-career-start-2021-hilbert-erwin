import ProductDetail from "../model/ProductDetail";
import CartItem from "../model/CartItem";

export enum CartActionTypes {
  CART_ADD_TO_CART = "CART_ADD_TO_CART",
  CART_DELETE_FROM_CART = "CART_DELETE_FROM_CART",
  CART_CHECKOUT = "CART_CHECKOUT",
  CART_CHECKOUT_SUCCESS = "CART_CHECKOUT_SUCCESS",
  CART_CHECKOUT_ERROR = "CART_CHECKOUT_ERROR",
}

export class CartAddToCartAction {
  public readonly type = CartActionTypes.CART_ADD_TO_CART;
  public product: ProductDetail;

  constructor(product: ProductDetail) {
    this.product = product;
  }
}

export class CartDeleteFromCartAction {
  public readonly type = CartActionTypes.CART_DELETE_FROM_CART;
  public id: number;

  constructor(id: number) {
    this.id = id;
  }
}

export class CartCheckoutAction {
  public readonly type = CartActionTypes.CART_CHECKOUT;
  public cartItems: CartItem[];

  constructor(cartItems: CartItem[]) {
    this.cartItems = cartItems;
  }
}

export class CartCheckoutSuccessAction {
  public readonly type = CartActionTypes.CART_CHECKOUT_SUCCESS;
}

export class CartCheckoutErrorAction {
  public readonly type = CartActionTypes.CART_CHECKOUT_ERROR;
}

export type CartAction =
  | CartAddToCartAction
  | CartDeleteFromCartAction
  | CartCheckoutAction
  | CartCheckoutSuccessAction
  | CartCheckoutErrorAction;

export const cartAddToCart = (product: ProductDetail): CartAddToCartAction => {
  return {
    type: CartActionTypes.CART_ADD_TO_CART,
    product: product,
  };
};

export const cartDeleteFromCart = (id: number): CartDeleteFromCartAction => {
  return {
    type: CartActionTypes.CART_DELETE_FROM_CART,
    id: id,
  };
};

export const cartCheckout = (cartItems: CartItem[]): CartCheckoutAction => {
  return {
    type: CartActionTypes.CART_CHECKOUT,
    cartItems: cartItems,
  };
};

export const cartCheckoutSuccess = (): CartCheckoutSuccessAction => {
  return {
    type: CartActionTypes.CART_CHECKOUT_SUCCESS,
  };
};

export const cartCheckoutError = (): CartCheckoutErrorAction => {
  return {
    type: CartActionTypes.CART_CHECKOUT_ERROR,
  };
};

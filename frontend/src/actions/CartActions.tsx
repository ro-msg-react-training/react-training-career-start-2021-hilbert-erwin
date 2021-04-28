import ProductDetail from "../model/ProductDetail";
import CartItem from "../model/CartItem";

export enum CartActionTypes {
  CART_FETCH_CART_ITEMS = "CART_FETCH_CART_ITEMS",
  CART_FETCH_CART_ITEMS_SUCCESS = "CART_FETCH_CART_ITEMS_SUCCESS",
  CART_FETCH_CART_ITEMS_ERROR = "CART_ITEMS_VIEW_FETCH_CART_ITEMS_ERROR",
  CART_ADD_TO_CART = "CART_ADD_TO_CART",
  CART_ADD_TO_CART_SUCCESS = "CART_ADD_TO_CART_SUCCESS",
  CART_ADD_TO_CART_ERROR = "CART_ADD_TO_CART_ERROR",
}

export class CartFetchCartItemsAction {
  public readonly type = CartActionTypes.CART_FETCH_CART_ITEMS;
}

export class CartFetchCartItemsSuccessAction {
  public readonly type = CartActionTypes.CART_FETCH_CART_ITEMS_SUCCESS;
  public cartItems: CartItem[];

  constructor(cartItems: CartItem[]) {
    this.cartItems = cartItems;
  }
}

export class CartFetchCartItemsErrorAction {
  public readonly type = CartActionTypes.CART_FETCH_CART_ITEMS_ERROR;
}

export class CartAddToCartAction {
  public readonly type = CartActionTypes.CART_ADD_TO_CART;
  public product: ProductDetail;

  constructor(product: ProductDetail) {
    this.product = product;
  }
}

export class CartAddToCartSuccessAction {
  public readonly type = CartActionTypes.CART_ADD_TO_CART_SUCCESS;
  public product: ProductDetail;

  constructor(product: ProductDetail) {
    this.product = product;
  }
}

export class CartAddToCartErrorAction {
  public readonly type = CartActionTypes.CART_ADD_TO_CART_ERROR;
}

export type CartAction =
  | CartFetchCartItemsAction
  | CartFetchCartItemsSuccessAction
  | CartFetchCartItemsErrorAction
  | CartAddToCartAction
  | CartAddToCartSuccessAction
  | CartAddToCartErrorAction;

export const cartFetchCartItems = (): CartFetchCartItemsAction => {
  return {
    type: CartActionTypes.CART_FETCH_CART_ITEMS,
  };
};

export const cartFetchCartItemsSuccess = (
  cartItems: CartItem[]
): CartFetchCartItemsSuccessAction => {
  return {
    type: CartActionTypes.CART_FETCH_CART_ITEMS_SUCCESS,
    cartItems: cartItems,
  };
};

export const cartFetchCartError = (): CartFetchCartItemsErrorAction => {
  return {
    type: CartActionTypes.CART_FETCH_CART_ITEMS_ERROR,
  };
};

export const cartAddToCart = (product: ProductDetail): CartAddToCartAction => {
  return {
    type: CartActionTypes.CART_ADD_TO_CART,
    product: product,
  };
};

export const cartAddToCartSuccess = (
  product: ProductDetail
): CartAddToCartSuccessAction => {
  return {
    type: CartActionTypes.CART_ADD_TO_CART_SUCCESS,
    product: product,
  };
};

export const cartAddToCartError = (): CartAddToCartErrorAction => {
  return {
    type: CartActionTypes.CART_ADD_TO_CART_ERROR,
  };
};

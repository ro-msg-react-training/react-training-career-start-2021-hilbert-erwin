import { CartAction, CartActionTypes } from "../actions/CartActions";
import CartItem from "../model/CartItem";

export interface CartState {
  isLoading: boolean;
  cartItems: CartItem[];
}

const initialState: CartState = {
  isLoading: true,
  cartItems: [],
};

export const CartReducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.CART_FETCH_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        cartItems: action.cartItems,
        isLoading: false,
      };
    }
    case CartActionTypes.CART_FETCH_CART_ITEMS_ERROR: {
      console.log("failed to load products");
      return {
        ...state,
        isLoading: false,
      };
    }
    case CartActionTypes.CART_FETCH_CART_ITEMS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CartActionTypes.CART_ADD_TO_CART_SUCCESS: {
      if (state.cartItems.some((e) => e.id === action.product.id)) {
        return {
          ...state,
          cartItems: state.cartItems.map((e) => {
            if (e.id === action.product.id) {
              let clone: CartItem = { ...e };
              clone.quantity++;
              return clone;
            } else {
              return e;
            }
          }),
          isLoading: false,
        };
      } else {
        let clone: CartItem[] = { ...state.cartItems };
        clone[clone.length] = { ...action.product, quantity: 1 };
        return {
          ...state,
          cartItems: clone,
          isLoading: false,
        };
      }
    }
    case CartActionTypes.CART_ADD_TO_CART_ERROR: {
      console.log("failed to add product to cart");
      return {
        ...state,
        isLoading: false,
      };
    }
    case CartActionTypes.CART_ADD_TO_CART: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

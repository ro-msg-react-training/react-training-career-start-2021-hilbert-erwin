import { CartAction, CartActionTypes } from "../actions/CartActions";
import CartItem from "../model/CartItem";

export interface CartState {
  isLoading: boolean;
  cartItems: CartItem[];
}

const initialState: CartState = {
  isLoading: false,
  cartItems: [],
};

export const CartReducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.CART_ADD_TO_CART: {
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
          isLoading: true,
        };
      } else {
        let clone: CartItem[] = [...state.cartItems];
        clone[clone.length] = { ...action.product, quantity: 1 };
        return {
          ...state,
          cartItems: clone,
        };
      }
    }
    case CartActionTypes.CART_DELETE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((e) => e.id !== action.id),
      };
    }
    case CartActionTypes.CART_CHECKOUT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CartActionTypes.CART_CHECKOUT_SUCCESS: {
      return {
        ...state,
        cartItems: [],
        isLoading: false,
      };
    }
    case CartActionTypes.CART_CHECKOUT_ERROR: {
      console.log("error creating order");
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

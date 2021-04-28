import {
  ProductViewAction,
  ProductViewActionTypes,
} from "../actions/ProductViewActions";
import ProductDetail from "../model/ProductDetail";

export interface ProductViewState {
  isLoading: boolean;
  product: ProductDetail;
}

const initialState: ProductViewState = {
  isLoading: true,
  product: {
    name: "",
    category: "",
    price: 0,
    id: -1,
    description: "",
    image: "",
  },
};

export const ProductViewReducer = (
  state: ProductViewState = initialState,
  action: ProductViewAction
): ProductViewState => {
  switch (action.type) {
    case ProductViewActionTypes.PRODUCT_VIEW_FETCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        product: action.product,
        isLoading: false,
      };
    }
    case ProductViewActionTypes.PRODUCT_VIEW_FETCH_PRODUCT_ERROR: {
      console.log("failed to load product");
      return {
        ...state,
        isLoading: false,
      };
    }
    case ProductViewActionTypes.PRODUCT_VIEW_FETCH_PRODUCT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

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
    case ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_NAME: {
      return {
        ...state,
        product: Object.assign(state.product, { name: action.name }),
      };
    }
    case ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_DESCRIPTION: {
      return {
        ...state,
        product: Object.assign(state.product, {
          description: action.description,
        }),
      };
    }
    case ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_CATEGORY: {
      return {
        ...state,
        product: Object.assign(state.product, { category: action.category }),
      };
    }
    case ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_IMAGE: {
      return {
        ...state,
        product: Object.assign(state.product, { image: action.image }),
      };
    }
    case ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_PRICE: {
      return {
        ...state,
        product: Object.assign(state.product, { price: action.price }),
      };
    }
    case ProductViewActionTypes.PRODUCT_VIEW_ADD_PRODUCT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ProductViewActionTypes.PRODUCT_VIEW_ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ProductViewActionTypes.PRODUCT_VIEW_ADD_PRODUCT_ERROR: {
      console.log("failed to add product");
      return {
        ...state,
        isLoading: false,
      };
    }
    case ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT: {
      return {
        ...state,
        product: action.product,
      };
    }
    case ProductViewActionTypes.PRODUCT_VIEW_UPDATE_PRODUCT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ProductViewActionTypes.PRODUCT_VIEW_UPDATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        product: action.product,
      };
    }
    case ProductViewActionTypes.PRODUCT_VIEW_UPDATE_PRODUCT_ERROR: {
      console.log("error updating product");
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

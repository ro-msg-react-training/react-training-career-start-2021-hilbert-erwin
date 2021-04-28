import {
  ProductListAction,
  ProductListActionTypes,
} from "../actions/ProductListActions";
import Product from "../model/Product";

export interface ProductListState {
  isLoading: boolean;
  productList: Product[];
}

const initialState: ProductListState = {
  isLoading: true,
  productList: [],
};

export const ProductListReducer = (
  state: ProductListState = initialState,
  action: ProductListAction
): ProductListState => {
  switch (action.type) {
    case ProductListActionTypes.PRODUCT_LIST_FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        productList: action.productList,
        isLoading: false,
      };
    }
    case ProductListActionTypes.PRODUCT_LIST_FETCH_PRODUCTS_ERROR: {
      console.log("failed to load products");
      return {
        ...state,
        isLoading: false,
      };
    }
    case ProductListActionTypes.PRODUCT_LIST_FETCH_PRODUCTS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ProductListActionTypes.PRODUCT_LIST_DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        productList: state.productList.splice(
          state.productList.findIndex((i) => {
            return i.id === action.id;
          })
        ),
        isLoading: false,
      };
    }
    case ProductListActionTypes.PRODUCT_LIST_DELETE_PRODUCT_ERROR: {
      console.log("failed to delete product");
      return {
        ...state,
        isLoading: false,
      };
    }
    case ProductListActionTypes.PRODUCT_LIST_DELETE_PRODUCT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

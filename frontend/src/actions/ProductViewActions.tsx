import ProductDetail from "../model/ProductDetail";

export enum ProductViewActionTypes {
  PRODUCT_VIEW_FETCH_PRODUCT = "PRODUCT_VIEW_FETCH_PRODUCT",
  PRODUCT_VIEW_FETCH_PRODUCT_SUCCESS = "PRODUCT_VIEW_FETCH_PRODUCT_SUCCESS",
  PRODUCT_VIEW_FETCH_PRODUCT_ERROR = "PRODUCT_VIEW_FETCH_PRODUCT_ERROR",
}

export class ProductViewFetchProductAction {
  public readonly type = ProductViewActionTypes.PRODUCT_VIEW_FETCH_PRODUCT;
  public id: number;

  constructor(id: number) {
    this.id = id;
  }
}

export class ProductViewFetchProductSuccessAction {
  public readonly type =
    ProductViewActionTypes.PRODUCT_VIEW_FETCH_PRODUCT_SUCCESS;
  public product: ProductDetail;

  constructor(product: ProductDetail) {
    this.product = product;
  }
}

export class ProductViewFetchProductErrorAction {
  public readonly type =
    ProductViewActionTypes.PRODUCT_VIEW_FETCH_PRODUCT_ERROR;
}

export type ProductViewAction =
  | ProductViewFetchProductAction
  | ProductViewFetchProductSuccessAction
  | ProductViewFetchProductErrorAction;

export const productViewFetchProduct = (
  id: number
): ProductViewFetchProductAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_FETCH_PRODUCT,
    id: id,
  };
};

export const productViewFetchProductSuccess = (
  product: ProductDetail
): ProductViewFetchProductSuccessAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_FETCH_PRODUCT_SUCCESS,
    product: product,
  };
};

export const productViewFetchProductError = (): ProductViewFetchProductErrorAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_FETCH_PRODUCT_ERROR,
  };
};

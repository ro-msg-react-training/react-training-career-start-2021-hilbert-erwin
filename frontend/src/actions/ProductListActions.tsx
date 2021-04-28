import Product from "../model/Product";

export enum ProductListActionTypes {
  PRODUCT_LIST_FETCH_PRODUCTS = "PRODUCT_LIST_FETCH_PRODUCTS",
  PRODUCT_LIST_FETCH_PRODUCTS_SUCCESS = "PRODUCT_LIST_FETCH_PRODUCTS_SUCCESS",
  PRODUCT_LIST_FETCH_PRODUCTS_ERROR = "PRODUCT_LIST_FETCH_PRODUCTS_ERROR",
  PRODUCT_LIST_DELETE_PRODUCT = "PRODUCT_LIST_DELETE_PRODUCT",
  PRODUCT_LIST_DELETE_PRODUCT_SUCCESS = "PRODUCT_LIST_DELETE_PRODUCT_SUCCESS",
  PRODUCT_LIST_DELETE_PRODUCT_ERROR = "PRODUCT_LIST_DELETE_PRODUCT_ERROR",
}

export class ProductListFetchProductsAction {
  public readonly type = ProductListActionTypes.PRODUCT_LIST_FETCH_PRODUCTS;
}

export class ProductListFetchProductsSuccessAction {
  public readonly type =
    ProductListActionTypes.PRODUCT_LIST_FETCH_PRODUCTS_SUCCESS;
  public productList: Product[];

  constructor(productList: Product[]) {
    this.productList = productList;
  }
}

export class ProductListFetchProductsErrorAction {
  public readonly type =
    ProductListActionTypes.PRODUCT_LIST_FETCH_PRODUCTS_ERROR;
}

export class ProductListDeleteProductAction {
  public readonly type = ProductListActionTypes.PRODUCT_LIST_DELETE_PRODUCT;
  public id: number;

  constructor(id: number) {
    this.id = id;
  }
}

export class ProductListDeleteProductSuccessAction {
  public readonly type =
    ProductListActionTypes.PRODUCT_LIST_DELETE_PRODUCT_SUCCESS;
  public id: number;

  constructor(id: number) {
    this.id = id;
  }
}

export class ProductListDeleteProductErrorAction {
  public readonly type =
    ProductListActionTypes.PRODUCT_LIST_DELETE_PRODUCT_ERROR;
}

export type ProductListAction =
  | ProductListFetchProductsAction
  | ProductListFetchProductsSuccessAction
  | ProductListFetchProductsErrorAction
  | ProductListDeleteProductAction
  | ProductListDeleteProductSuccessAction
  | ProductListDeleteProductErrorAction;

export const productListFetchProducts = (): ProductListFetchProductsAction => {
  return {
    type: ProductListActionTypes.PRODUCT_LIST_FETCH_PRODUCTS,
  };
};

export const productListFetchProductsSuccess = (
  productList: Product[]
): ProductListFetchProductsSuccessAction => {
  return {
    type: ProductListActionTypes.PRODUCT_LIST_FETCH_PRODUCTS_SUCCESS,
    productList: productList,
  };
};

export const productListFetchProductsError = (): ProductListFetchProductsErrorAction => {
  return {
    type: ProductListActionTypes.PRODUCT_LIST_FETCH_PRODUCTS_ERROR,
  };
};

export const productListDeleteProduct = (
  id: number
): ProductListDeleteProductAction => {
  return {
    type: ProductListActionTypes.PRODUCT_LIST_DELETE_PRODUCT,
    id: id,
  };
};

export const productListDeleteProductSuccess = (
  id: number
): ProductListDeleteProductSuccessAction => {
  return {
    type: ProductListActionTypes.PRODUCT_LIST_DELETE_PRODUCT_SUCCESS,
    id: id,
  };
};

export const productListDeleteProductError = (): ProductListDeleteProductErrorAction => {
  return {
    type: ProductListActionTypes.PRODUCT_LIST_DELETE_PRODUCT_ERROR,
  };
};

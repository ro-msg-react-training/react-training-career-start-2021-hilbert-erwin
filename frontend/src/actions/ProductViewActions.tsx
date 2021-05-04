import ProductDetail from "../model/ProductDetail";

export enum ProductViewActionTypes {
  PRODUCT_VIEW_FETCH_PRODUCT = "PRODUCT_VIEW_FETCH_PRODUCT",
  PRODUCT_VIEW_FETCH_PRODUCT_SUCCESS = "PRODUCT_VIEW_FETCH_PRODUCT_SUCCESS",
  PRODUCT_VIEW_FETCH_PRODUCT_ERROR = "PRODUCT_VIEW_FETCH_PRODUCT_ERROR",
  PRODUCT_VIEW_SET_PRODUCT_NAME = "PRODUCT_VIEW_SET_PRODUCT_NAME",
  PRODUCT_VIEW_SET_PRODUCT_DESCRIPTION = "PRODUCT_VIEW_SET_PRODUCT_DESCRIPTION",
  PRODUCT_VIEW_SET_PRODUCT_CATEGORY = "PRODUCT_VIEW_SET_PRODUCT_CATEGORY",
  PRODUCT_VIEW_SET_PRODUCT_IMAGE = "PRODUCT_VIEW_SET_PRODUCT_IMAGE",
  PRODUCT_VIEW_SET_PRODUCT_PRICE = "PRODUCT_VIEW_SET_PRODUCT_PRICE",
  PRODUCT_VIEW_UPDATE_PRODUCT = "PRODUCT_VIEW_UPDATE_PRODUCT",
  PRODUCT_VIEW_UPDATE_PRODUCT_SUCCESS = "PRODUCT_VIEW_UPDATE_PRODUCT_SUCCESS",
  PRODUCT_VIEW_UPDATE_PRODUCT_ERROR = "PRODUCT_VIEW_UPDATE_PRODUCT_ERROR",
  PRODUCT_VIEW_ADD_PRODUCT = "PRODUCT_VIEW_ADD_PRODUCT",
  PRODUCT_VIEW_ADD_PRODUCT_SUCCESS = "PRODUCT_VIEW_ADD_PRODUCT_SUCCESS",
  PRODUCT_VIEW_ADD_PRODUCT_ERROR = "PRODUCT_VIEW_ADD_PRODUCT_ERROR",
  PRODUCT_VIEW_SET_PRODUCT = "PRODUCT_VIEW_SET_PRODUCT",
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

export class ProductViewSetProductNameAction {
  public readonly type = ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_NAME;
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class ProductViewSetProductDescriptionAction {
  public readonly type =
    ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_DESCRIPTION;
  public description: string;

  constructor(description: string) {
    this.description = description;
  }
}

export class ProductViewSetProductCategoryAction {
  public readonly type =
    ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_CATEGORY;
  public category: string;

  constructor(category: string) {
    this.category = category;
  }
}

export class ProductViewSetProductImageAction {
  public readonly type = ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_IMAGE;
  public image: string;

  constructor(image: string) {
    this.image = image;
  }
}

export class ProductViewSetProductPriceAction {
  public readonly type = ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_PRICE;
  public price: number;

  constructor(price: number) {
    this.price = price;
  }
}

export class ProductViewAddProductAction {
  public readonly type = ProductViewActionTypes.PRODUCT_VIEW_ADD_PRODUCT;
  public name: string;
  public description: string;
  public category: string;
  public image: string;
  public price: number;

  constructor(
    name: string,
    description: string,
    category: string,
    image: string,
    price: number
  ) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.image = image;
    this.price = price;
  }
}

export class ProductViewAddProductSuccessAction {
  public readonly type =
    ProductViewActionTypes.PRODUCT_VIEW_ADD_PRODUCT_SUCCESS;
}

export class ProductViewAddProductErrorAction {
  public readonly type = ProductViewActionTypes.PRODUCT_VIEW_ADD_PRODUCT_ERROR;
}

export class ProductViewSetProductAction {
  public readonly type = ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT;
  public product: ProductDetail;

  constructor(product: ProductDetail) {
    this.product = product;
  }
}

export class ProductViewUpdateProductAction {
  public readonly type = ProductViewActionTypes.PRODUCT_VIEW_UPDATE_PRODUCT;
  public product: ProductDetail;

  constructor(product: ProductDetail) {
    this.product = product;
  }
}

export class ProductViewUpdateProductSuccessAction {
  public readonly type =
    ProductViewActionTypes.PRODUCT_VIEW_UPDATE_PRODUCT_SUCCESS;
  public product: ProductDetail;

  constructor(product: ProductDetail) {
    this.product = product;
  }
}

export class ProductViewUpdateProductErrorAction {
  public readonly type =
    ProductViewActionTypes.PRODUCT_VIEW_UPDATE_PRODUCT_ERROR;
}

export type ProductViewAction =
  | ProductViewFetchProductAction
  | ProductViewFetchProductSuccessAction
  | ProductViewFetchProductErrorAction
  | ProductViewSetProductNameAction
  | ProductViewSetProductDescriptionAction
  | ProductViewSetProductImageAction
  | ProductViewSetProductCategoryAction
  | ProductViewSetProductPriceAction
  | ProductViewAddProductAction
  | ProductViewAddProductSuccessAction
  | ProductViewAddProductErrorAction
  | ProductViewSetProductAction
  | ProductViewUpdateProductAction
  | ProductViewUpdateProductSuccessAction
  | ProductViewUpdateProductErrorAction;

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

export const productViewSetProductName = (
  name: string
): ProductViewSetProductNameAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_NAME,
    name: name,
  };
};

export const productViewSetProductDescription = (
  description: string
): ProductViewSetProductDescriptionAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_DESCRIPTION,
    description: description,
  };
};

export const productViewSetProductCategory = (
  category: string
): ProductViewSetProductCategoryAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_CATEGORY,
    category: category,
  };
};

export const productViewSetProductImage = (
  image: string
): ProductViewSetProductImageAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_IMAGE,
    image: image,
  };
};

export const productViewSetProductPrice = (
  price: number
): ProductViewSetProductPriceAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT_PRICE,
    price: price,
  };
};

export const productViewAddProduct = (
  name: string,
  description: string,
  category: string,
  image: string,
  price: number
): ProductViewAddProductAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_ADD_PRODUCT,
    name: name,
    category: category,
    description: description,
    image: image,
    price: price,
  };
};

export const productViewAddProductSuccess = (): ProductViewAddProductSuccessAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_ADD_PRODUCT_SUCCESS,
  };
};

export const productViewAddProductError = (): ProductViewAddProductErrorAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_ADD_PRODUCT_ERROR,
  };
};

export const productViewSetProduct = (
  product: ProductDetail
): ProductViewSetProductAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_SET_PRODUCT,
    product: product,
  };
};

export const productViewUpdateProduct = (
  product: ProductDetail
): ProductViewUpdateProductAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_UPDATE_PRODUCT,
    product: product,
  };
};

export const productViewUpdateProductSuccess = (
  product: ProductDetail
): ProductViewUpdateProductSuccessAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_UPDATE_PRODUCT_SUCCESS,
    product: product,
  };
};

export const productViewUpdateProductError = (): ProductViewUpdateProductErrorAction => {
  return {
    type: ProductViewActionTypes.PRODUCT_VIEW_UPDATE_PRODUCT_ERROR,
  };
};

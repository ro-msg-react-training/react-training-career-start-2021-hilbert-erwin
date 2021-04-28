import { connect } from "react-redux";
import { Dispatch } from "redux";
import ProductDetail from "../../model/ProductDetail";
import { productViewFetchProduct } from "../../actions/ProductViewActions";
import { productListDeleteProduct } from "../../actions/ProductListActions";
import { AppState } from "../../store/store";
import ProductViewDumb from "./ProductViewDumb";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

interface ProductViewSmartProps {
  product: ProductDetail;
  isLoading: boolean;
  productViewFetchProduct: (id: number) => void;
  productListDeleteProduct: (id: number) => void;
}

function ProductViewSmart(props: ProductViewSmartProps) {
  let history = useHistory();
  const { id } = useParams<{ id?: string | undefined }>();

  const addToCart = (product: ProductDetail): void => {
    history.push("/cart");
  };

  const deleteProduct = (product: ProductDetail): void => {
    if (id !== undefined) {
      props.productListDeleteProduct(parseInt(id));
    }
    history.push("/products");
  };

  useEffect(() => {
    if (id !== undefined && props.product.id !== parseInt(id)) {
      props.productViewFetchProduct(parseInt(id));
      return;
    }
    if (!props.isLoading) {
      return;
    }
    if (id !== undefined) props.productViewFetchProduct(parseInt(id));
  });

  return (
    <ProductViewDumb
      product={props.product}
      addToCart={addToCart}
      deleteProduct={deleteProduct}
    ></ProductViewDumb>
  );
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.productView.isLoading,
  product: state.productView.product,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  productViewFetchProduct: (id: number) =>
    dispatch(productViewFetchProduct(id)),
  productListDeleteProduct: (id: number) =>
    dispatch(productListDeleteProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewSmart);

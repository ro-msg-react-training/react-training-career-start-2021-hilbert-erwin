import { connect } from "react-redux";
import { Dispatch } from "redux";
import ProductDetail from "../../model/ProductDetail";
import { productViewFetchProduct } from "../../actions/ProductViewActions";
import { productListDeleteProduct } from "../../actions/ProductListActions";
import { cartDeleteFromCart } from "../../actions/CartActions";
import { cartAddToCart } from "../../actions/CartActions";
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
  cartAddToCart: (product: ProductDetail) => void;
  cartDeleteFromCart: (id: number) => void;
}

function ProductViewSmart(props: ProductViewSmartProps) {
  let history = useHistory();
  const { id } = useParams<{ id?: string | undefined }>();

  const addToCart = (product: ProductDetail): void => {
    props.cartAddToCart(props.product);
    history.push("/cart");
  };

  const deleteProduct = (product: ProductDetail): void => {
    if (id !== undefined) {
      props.productListDeleteProduct(parseInt(id));
      props.cartDeleteFromCart(parseInt(id));
    }
    history.push("/products");
  };

  const goToProductUpdate = (): void => {
    history.push(`/products/${id}/update`);
  };

  useEffect(() => {
    if (id !== undefined) {
      console.log(parseInt(id) + "  " + props.product.id);
      if (parseInt(id) !== props.product.id) {
        props.productViewFetchProduct(parseInt(id));
      }
    }
  }, [id]);

  return (
    <ProductViewDumb
      product={props.product}
      addToCart={addToCart}
      deleteProduct={deleteProduct}
      goToProductUpdate={goToProductUpdate}
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
  cartAddToCart: (product: ProductDetail) => dispatch(cartAddToCart(product)),
  cartDeleteFromCart: (id: number) => dispatch(cartDeleteFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewSmart);

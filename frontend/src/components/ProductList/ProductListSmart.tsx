import { connect } from "react-redux";
import { Dispatch } from "redux";
import Product from "../../model/Product";
import { productListFetchProducts } from "../../actions/ProductListActions";
import { AppState } from "../../store/store";
import ProductListDumb from "./ProductListDumb";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

interface ProductListSmartProps {
  productList: Product[];
  isLoading: boolean;
  productListFetchProducts: () => void;
}

function ProductListSmart(props: ProductListSmartProps) {
  let history = useHistory();

  const goToProduct = (id: number) => {
    history.push(`/products/${id}`);
  };

  const goToCart = () => {
    history.push("/cart");
  };

  const goToAddProduct = () => {
    history.push("/products/add");
  };

  useEffect(() => {
    if (!props.isLoading) {
      return;
    }
    props.productListFetchProducts();
  });

  return (
    <ProductListDumb
      productList={props.productList}
      goToProduct={goToProduct}
      goToCart={goToCart}
      goToAddProduct={goToAddProduct}
    ></ProductListDumb>
  );
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.productList.isLoading,
  productList: state.productList.productList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  productListFetchProducts: () => dispatch(productListFetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListSmart);

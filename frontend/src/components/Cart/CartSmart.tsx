import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../store/store";
import CartItem from "../../model/CartItem";
import CartDumb from "./CartDumb";
import {
  cartAddToCart,
  cartDeleteFromCart,
  cartCheckout,
} from "../../actions/CartActions";
import ProductDetail from "../../model/ProductDetail";
import { useHistory } from "react-router-dom";

interface CartSmartProps {
  cartItems: CartItem[];
  isLoading: boolean;
  cartAddToCart: (product: ProductDetail) => void;
  cartDeleteFromCart: (id: number) => void;
  cartCheckout: (cartItems: CartItem[]) => void;
}

function CartSmart(props: CartSmartProps) {
  let history = useHistory();

  const checkout = (): void => {
    props.cartCheckout(props.cartItems);
    history.push("/products");
  };

  return (
    <CartDumb
      cartItems={props.cartItems}
      checkout={checkout}
      cartDeleteFromCart={props.cartDeleteFromCart}
    ></CartDumb>
  );
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.productList.isLoading,
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  cartAddToCart: (product: ProductDetail) => dispatch(cartAddToCart(product)),
  cartDeleteFromCart: (id: number) => dispatch(cartDeleteFromCart(id)),
  cartCheckout: (cartItems: CartItem[]) => dispatch(cartCheckout(cartItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartSmart);

import { useCartStyles } from "../../styles/Cart.styles";
import { Paper, Grid, Button } from "@material-ui/core";
import ProductDetail from "../ProductList/ProductDetail";
import CartItem from "../../model/CartItem";

interface CartProps {
  cartItems: CartItem[];
  checkout: () => void;
  cartDeleteFromCart: (id: number) => void;
}

function CartDumb(props: CartProps) {
  const classes = useCartStyles();

  let products = props.cartItems.map((product: CartItem, index: number) => (
    <Grid container key={index}>
      <Grid item className={classes.detail}>
        <ProductDetail {...product} />
      </Grid>
      <Grid item className={classes.text}>
        {product.quantity}
      </Grid>
      <Grid item className={classes.viewButton}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            props.cartDeleteFromCart(product.id);
          }}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  ));

  return (
    <Paper variant="outlined" className={classes.root}>
      <Grid container>
        <Grid item>
          <h1 className={classes.header}>Shopping Cart</h1>
        </Grid>
        <Grid item>
          <Button
            className={classes.cart}
            variant="outlined"
            color="primary"
            onClick={() => {
              props.checkout();
            }}
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container className={classes.detail}>
          <Grid item className={classes.item}>
            Name
          </Grid>
          <Grid item className={classes.item}>
            Category
          </Grid>
          <Grid item className={classes.item}>
            Price
          </Grid>
        </Grid>
        <Grid item className={classes.quantity}>
          Quantity
        </Grid>
      </Grid>
      <Grid container direction="column">
        {products}
      </Grid>
    </Paper>
  );
}

export default CartDumb;

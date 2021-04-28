import { useCartStyles } from "../../styles/Cart.styles";
import { Paper, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router";
import ProductDetail from "../ProductDetail";
import CartItem from "../../model/CartItem";
import axios from "axios";
import { url } from "../../api/Api";

const productList = [
  {
    name: "product1",
    category: "category1",
    price: 15,
    quantity: 2,
    id: 5,
  },
  {
    name: "product2",
    category: "category1",
    price: 30,
    quantity: 1,
    id: 6,
  },
  {
    name: "product3",
    category: "category2",
    price: 10,
    quantity: 3,
    id: 7,
  },
];

function Cart() {
  const classes = useCartStyles();
  let history = useHistory();

  async function checkout() {
    let data = {
      customer: "doej",
      products: [] as any,
    };
    productList.forEach((item) => {
      data.products[data.products.length] = {
        productId: item.id,
        quantity: item.quantity,
      };
    });
    await axios.post(`${url}/orders`, data);
    history.push("/products");
  }

  let products = productList.map((product: CartItem, index: number) => (
    <Grid container key={index}>
      <Grid item className={classes.detail}>
        <ProductDetail {...product} />
      </Grid>
      <Grid item className={classes.text}>
        {product.quantity}
      </Grid>
      <Grid item className={classes.viewButton}>
        <Button variant="outlined" color="primary">
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
            onClick={async () => {
              await checkout();
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

export default Cart;

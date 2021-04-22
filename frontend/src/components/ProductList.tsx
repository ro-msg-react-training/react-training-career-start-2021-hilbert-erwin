import ProductDetail from "./ProductDetail";
import { Grid, Paper, Button } from "@material-ui/core";
import { useProductListStyles } from "../styles/ProductListStyles";
import { useHistory } from "react-router-dom";

let data = [
  {
    name: "product1",
    category: "category1",
    price: 15,
    id: 1,
  },
  {
    name: "product2",
    category: "category1",
    price: 30,
    id: 2,
  },
  {
    name: "product3",
    category: "category2",
    price: 10,
    id: 3,
  },
];

function ProductList() {
  const classes = useProductListStyles();
  let history = useHistory();
  let products = data.map((product, index) => (
    <Grid container>
      <Grid item className={classes.detail}>
        <ProductDetail key={index} {...product} />
      </Grid>
      <Grid item className={classes.viewButton}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            history.push(`/products/${product.id}`);
          }}
        >
          View
        </Button>
      </Grid>
    </Grid>
  ));

  return (
    <Paper variant="outlined" className={classes.root}>
      <Grid container>
        <Grid item>
          <h1 className={classes.header}>Products</h1>
        </Grid>
        <Grid item>
          <Button
            className={classes.cart}
            variant="outlined"
            color="primary"
            onClick={() => {
              history.push("/cart");
            }}
          >
            Cart
          </Button>
        </Grid>
      </Grid>
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
      <Grid container direction="column">
        {products}
      </Grid>
    </Paper>
  );
}

export default ProductList;

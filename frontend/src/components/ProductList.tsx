import ProductDetail from "./ProductDetail";
import { Grid, Paper, Button } from "@material-ui/core";
import { useProductListStyles } from "../styles/ProductListStyles";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../api/Api";
import Product from "../model/Product";

function ProductList() {
  useEffect(() => {
    async function get() {
      let response = await axios.get(`${url}/products`);
      setProductList(response.data);
    }
    get();
  });

  const [productList, setProductList] = useState([
    {
      name: "",
      category: "",
      price: 0,
      id: 0,
    },
  ]);
  const classes = useProductListStyles();
  let history = useHistory();
  let products = productList.map((product: Product, index: number) => (
    <Grid container key={index}>
      <Grid item className={classes.detail}>
        <ProductDetail {...product} />
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

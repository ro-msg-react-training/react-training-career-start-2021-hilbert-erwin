import { useProductViewStyles } from "../styles/ProductViewStyles";
import { useParams } from "react-router-dom";
import { Paper, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../api/Api";

function ProductDetail() {
  const classes = useProductViewStyles();
  const { id } = useParams<{ id?: string | undefined }>();
  let history = useHistory();

  useEffect(() => {
    async function get(id: number | undefined) {
      let response = await axios.get(`${url}/products/${id}`);
      setProduct(response.data);
    }
    if (id !== undefined) {
      get(parseInt(id));
    } else {
      get(0);
    }
  });

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: 0,
    id: 0,
    image: "",
    description: "",
  });

  return (
    <Paper variant="outlined" className={classes.root}>
      <Grid container>
        <Grid item className={classes.header}>
          <h1>Product: {product.name}</h1>
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
            Add To Cart
          </Button>
          <Button
            className={classes.cart}
            variant="outlined"
            color="primary"
            onClick={async () => {
              await axios.delete(`${url}/products/${product.id}`);
              history.push("/products");
            }}
          >
            delete
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container item className={classes.details} direction="column">
          <p>Name: {product.name}</p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price} RON</p>
        </Grid>
        <Grid item className={classes.image}>
          <img src={product.image} alt="product" width="500px" height="500px" />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProductDetail;

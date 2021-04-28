import { useProductViewStyles } from "../../styles/ProductView.styles";
import { Paper, Grid, Button } from "@material-ui/core";
import ProductDetail from "../../model/ProductDetail";

interface ProductViewProps {
  product: ProductDetail;
  addToCart: (product: ProductDetail) => void;
  deleteProduct: (product: ProductDetail) => void;
}

function ProductViewDumb(props: ProductViewProps) {
  const classes = useProductViewStyles();

  return (
    <Paper variant="outlined" className={classes.root}>
      <Grid container>
        <Grid item className={classes.header}>
          <h1>Product: {props.product.name}</h1>
        </Grid>
        <Grid item>
          <Button
            className={classes.cart}
            variant="outlined"
            color="primary"
            onClick={() => {
              props.addToCart(props.product);
            }}
          >
            Add To Cart
          </Button>
          <Button
            className={classes.cart}
            variant="outlined"
            color="primary"
            onClick={() => {
              props.deleteProduct(props.product);
            }}
          >
            delete
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container item className={classes.details} direction="column">
          <p>Name: {props.product.name}</p>
          <p>Category: {props.product.category}</p>
          <p>Description: {props.product.description}</p>
          <p>Price: {props.product.price} RON</p>
        </Grid>
        <Grid item className={classes.image}>
          <img
            src={props.product.image}
            alt="product"
            width="500px"
            height="500px"
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProductViewDumb;

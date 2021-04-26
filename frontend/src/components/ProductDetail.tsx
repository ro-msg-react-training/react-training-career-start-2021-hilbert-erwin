import Grid from "@material-ui/core/Grid";
import { useProductDetailStyles } from "../styles/ProductDetailStyles";
import Product from "../model/Product";

function ProductDetail(props: Product) {
  const classes = useProductDetailStyles();
  return (
    <Grid container>
      <Grid item className={classes.item}>
        {props.name}
      </Grid>
      <Grid item className={classes.item}>
        {props.category}
      </Grid>
      <Grid item className={classes.item}>
        {props.price} RON
      </Grid>
    </Grid>
  );
}

export default ProductDetail;

import ProductDetail from "../ProductDetail";
import { Grid, Paper, Button } from "@material-ui/core";
import { useProductListStyles } from "../../styles/ProductList.styles";
import Product from "../../model/Product";

interface ProductListProps {
  productList: Product[];
  goToProduct: (id: number) => void;
  goToCart: () => void;
}

function ProductListDumb(props: ProductListProps) {
  const classes = useProductListStyles();

  let products = props.productList.map((product: Product, index: number) => (
    <Grid container key={index}>
      <Grid item className={classes.detail}>
        <ProductDetail {...product} />
      </Grid>
      <Grid item className={classes.viewButton}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            props.goToProduct(product.id);
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
              props.goToCart();
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

export default ProductListDumb;

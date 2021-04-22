import { useProductViewStyles } from "../styles/ProductViewStyles";
import { useParams } from "react-router-dom";
import { Paper, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

let data = [
  {
    name: "product1",
    category: "category1",
    price: 15,
    id: 1,
    description: "huh",
    image:
      "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
  },
  {
    name: "product2",
    category: "category1",
    price: 30,
    id: 2,
    description: "huh",
    image:
      "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
  },
  {
    name: "product3",
    category: "category2",
    price: 10,
    id: 3,
    description: "huh",
    image:
      "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
  },
];

interface Product {
  name: string;
  category: string;
  price: number;
  id: number;
  image: string;
  description: string;
}

function getProduct(id: number): Product | undefined {
  return data.find((x) => x.id === id);
}

function ProductDetail() {
  const classes = useProductViewStyles();
  const { id } = useParams<{ id?: string | undefined }>();
  let history = useHistory();
  let product;
  if (id !== undefined) {
    product = getProduct(parseInt(id));
  }
  if (product !== undefined) {
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
            <img
              src={product.image}
              alt="product"
              width="500px"
              height="500px"
            />
          </Grid>
        </Grid>
      </Paper>
    );
  } else {
    return <h1>Product Not Found</h1>;
  }
}

export default ProductDetail;

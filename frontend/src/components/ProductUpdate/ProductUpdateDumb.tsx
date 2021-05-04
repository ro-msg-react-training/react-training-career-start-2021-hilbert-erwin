import { useProductUpdateStyles } from "../../styles/ProductUpdate.styles";
import { Grid, Paper, Button, TextField } from "@material-ui/core";

interface ProductUpdateDumbProps {
  headerText: string;
  buttonText: string;
  buttonFunction: () => void;
  cancelFunction: () => void;
  setName: (name: string) => void;
  setCategory: (category: string) => void;
  setDescription: (description: string) => void;
  setImage: (image: string) => void;
  setPrice: (price: number) => void;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

function ProductUpdateDumb(props: ProductUpdateDumbProps) {
  const classes = useProductUpdateStyles();
  return (
    <Paper variant="outlined" className={classes.root}>
      <Grid container direction="column">
        <Grid item className={classes.items}>
          <h1>{props.headerText}</h1>
        </Grid>
        <Grid item className={classes.items}>
          <TextField
            className={classes.input}
            label="Name"
            variant="outlined"
            onChange={(e) => props.setName(e.target.value)}
            value={props.name}
          ></TextField>
        </Grid>
        <Grid item className={classes.items}>
          <TextField
            className={classes.input}
            label="Category"
            variant="outlined"
            onChange={(e) => props.setCategory(e.target.value)}
            value={props.category}
          ></TextField>
        </Grid>
        <Grid item className={classes.items}>
          <TextField
            className={classes.input}
            label="Image"
            variant="outlined"
            onChange={(e) => props.setImage(e.target.value)}
            value={props.image}
          ></TextField>
        </Grid>
        <Grid item className={classes.items}>
          <TextField
            className={classes.input}
            label="Price"
            variant="outlined"
            onChange={(e) => props.setPrice(parseInt(e.target.value))}
            value={props.price}
          ></TextField>
        </Grid>
        <Grid item className={classes.items}>
          <TextField
            className={classes.input}
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            onChange={(e) => props.setDescription(e.target.value)}
            value={props.description}
          ></TextField>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item className={classes.items}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              props.cancelFunction();
            }}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item className={classes.items}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              props.buttonFunction();
            }}
          >
            {props.buttonText}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProductUpdateDumb;

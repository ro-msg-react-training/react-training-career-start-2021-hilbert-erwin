import Grid from '@material-ui/core/Grid';
import { useProductDetailStyles } from '../styles/ProductDetailStyles';

interface ProductProp {
    name: string;
    category: string;
    price: number
}

function ProductDetail(props: ProductProp) {
    const classes = useProductDetailStyles();
    return (
        <Grid container>
            <Grid item className={classes.item}>{props.name}</Grid>
            <Grid item className={classes.item}>{props.category}</Grid>
            <Grid item className={classes.item}>{props.price}</Grid>
        </Grid>

    );
}

export default ProductDetail;
import ProductDetail from './ProductDetail';
import { Grid, Paper } from '@material-ui/core';
import { useProductListStyles } from '../styles/ProductListStyles';

let data = [
    {
        name: 'product1',
        category: 'category1',
        price: 15

    },
    {
        name: 'product2',
        category: 'category1',
        price: 30
    },
    {
        name: 'product3',
        category: 'category2',
        price: 10
    }
]

function ProductList() {
    let products = data.map((product, index) =>
        <ProductDetail key={index} {...product} />
    );
    const classes = useProductListStyles();

    return (
        <Paper variant="outlined" className={classes.root}>
            <h1 className={classes.header}>Products</h1>
            <Grid container>
                <Grid item className={classes.item}>Name</Grid>
                <Grid item className={classes.item}>Category</Grid>
                <Grid item className={classes.item}>Price</Grid>
            </Grid>
            <Grid container direction="column">{products}</Grid>
        </Paper>
    )

}

export default ProductList;
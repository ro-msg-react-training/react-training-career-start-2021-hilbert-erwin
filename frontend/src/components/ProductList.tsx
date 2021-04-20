import ProductDetail from './ProductDetail';
import '../styles/ProductList.css';

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

    return (
        <div className="Center">
            <h1>Products</h1>
            <div>
                <p>Category</p>
                <p>Name</p>
                <p>price</p>
            </div>
            <div>{products}</div>
        </div>


    )

}

export default ProductList;
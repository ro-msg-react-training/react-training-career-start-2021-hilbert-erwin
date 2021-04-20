import '../styles/ProductDetail.css'

interface ProductProp {
    name: string;
    category: string;
    price: number
}

function ProductDetail(props: ProductProp) {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.category}</p>
            <p>{props.price}</p>
        </div>
    
    );
}

export default ProductDetail;
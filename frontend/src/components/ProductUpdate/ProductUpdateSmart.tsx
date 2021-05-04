import ProductUpdateDumb from "./ProductUpdateDumb";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppState } from "../../store/store";
import { Dispatch } from "redux";
import {
  productViewSetProductName,
  productViewSetProductCategory,
  productViewSetProductDescription,
  productViewSetProductImage,
  productViewSetProductPrice,
  productViewAddProduct,
  productViewSetProduct,
  productViewFetchProduct,
  productViewUpdateProduct,
} from "../../actions/ProductViewActions";
import { useEffect } from "react";
import ProductDetail from "../../model/ProductDetail";

interface ProductUpdateSmartProps {
  productViewSetProductName: (name: string) => void;
  productViewSetProductCategory: (category: string) => void;
  productViewSetProductDescription: (description: string) => void;
  productViewSetProductImage: (image: string) => void;
  productViewSetProductPrice: (price: number) => void;
  productViewAddProduct: (
    name: string,
    category: string,
    description: string,
    image: string,
    price: number
  ) => void;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  id: number;
  isLoading: boolean;
  productViewSetProduct: (product: ProductDetail) => void;
  productViewFetchProduct: (id: number) => void;
  productViewUpdateProduct: (product: ProductDetail) => void;
}

function ProductUpdateSmart(props: ProductUpdateSmartProps) {
  let history = useHistory();
  const { id } = useParams<{ id?: string | undefined }>();

  function getButtonText(): string {
    if (id === undefined) {
      return "Add";
    } else {
      return "update";
    }
  }

  function getHeaderText(): string {
    if (id === undefined) {
      return "Add new product";
    } else {
      return "Update existing product";
    }
  }

  function updateProduct(): void {
    props.productViewUpdateProduct({
      name: props.name,
      category: props.category,
      description: props.description,
      image: props.image,
      price: props.price,
      id: props.id,
    });
    // TODO: change product in list and cart
    history.push(`/products/${id}`);
  }

  function addProduct(): void {
    props.productViewAddProduct(
      props.name,
      props.category,
      props.description,
      props.image,
      props.price
    );
    history.push("/products");
  }

  function getButtonFunction(): (...params: any) => void {
    if (id === undefined) {
      return addProduct;
    } else {
      return updateProduct;
    }
  }

  function updateCancelFunction(): void {
    history.push(`/products/${id}`);
  }

  function addCancelFunction(): void {
    history.push("/products");
  }

  function getCancelFunction(): () => void {
    if (id === undefined) {
      return addCancelFunction;
    } else {
      return updateCancelFunction;
    }
  }

  useEffect(() => {
    if (id === undefined) {
      props.productViewSetProduct({
        id: -1,
        name: "",
        description: "",
        price: 0,
        image: "",
        category: "",
      });
    } else {
      if (id !== undefined) {
        console.log(parseInt(id) + "  " + props.id);
        if (parseInt(id) !== props.id) {
          props.productViewFetchProduct(parseInt(id));
        }
      }
    }
  }, [id]);

  return (
    <ProductUpdateDumb
      headerText={getHeaderText()}
      buttonText={getButtonText()}
      buttonFunction={getButtonFunction()}
      cancelFunction={getCancelFunction()}
      setName={props.productViewSetProductName}
      setCategory={props.productViewSetProductCategory}
      setDescription={props.productViewSetProductDescription}
      setImage={props.productViewSetProductImage}
      setPrice={props.productViewSetProductPrice}
      name={props.name}
      category={props.category}
      image={props.image}
      description={props.description}
      price={props.price}
    ></ProductUpdateDumb>
  );
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.productView.isLoading,
  id: state.productView.product.id,
  name: state.productView.product.name,
  price: state.productView.product.price,
  category: state.productView.product.category,
  description: state.productView.product.description,
  image: state.productView.product.image,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  productViewSetProductName: (name: string) =>
    dispatch(productViewSetProductName(name)),
  productViewSetProductCategory: (category: string) =>
    dispatch(productViewSetProductCategory(category)),
  productViewSetProductDescription: (description: string) =>
    dispatch(productViewSetProductDescription(description)),
  productViewSetProductImage: (image: string) =>
    dispatch(productViewSetProductImage(image)),
  productViewSetProductPrice: (price: number) =>
    dispatch(productViewSetProductPrice(price)),
  productViewAddProduct: (
    name: string,
    category: string,
    description: string,
    image: string,
    price: number
  ) =>
    dispatch(productViewAddProduct(name, category, description, image, price)),
  productViewSetProduct: (product: ProductDetail) =>
    dispatch(productViewSetProduct(product)),
  productViewFetchProduct: (id: number) =>
    dispatch(productViewFetchProduct(id)),
  productViewUpdateProduct: (product: ProductDetail) =>
    dispatch(productViewUpdateProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductUpdateSmart);

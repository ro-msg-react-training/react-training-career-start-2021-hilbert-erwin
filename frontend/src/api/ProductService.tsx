import ProductDetail from "../model/ProductDetail";
import Product from "../model/Product";
import axios from "axios";
import { url } from "./Api";

export async function getAllProducts(): Promise<Product[]> {
  return (await axios.get<Product[]>(`${url}/products`)).data;
}

export async function getProductById(id: number): Promise<ProductDetail> {
  return (await axios.get<ProductDetail>(`${url}/products/${id}`)).data;
}

export async function deleteProductById(id: number): Promise<any> {
  await axios.delete(`${url}/products/${id}`);
}

export async function addProduct(
  name: string,
  category: string,
  description: string,
  image: string,
  price: number
): Promise<ProductDetail> {
  return (
    await axios.post<ProductDetail>(`${url}/products`, {
      name,
      category,
      description,
      image,
      price,
    })
  ).data;
}

export async function updateProduct(product: Product): Promise<Product> {
  return (await axios.put(`${url}/products/${product.id}`, product)).data;
}

import axios from "axios";
import CartItem from "../model/CartItem";
import { url } from "./Api";

export async function createOrder(cartItems: CartItem[]): Promise<any> {
  let data = {
    customer: "doej",
    products: [] as any,
  };
  cartItems.forEach((item) => {
    data.products[data.products.length] = {
      productId: item.id,
      quantity: item.quantity,
    };
  });
  return await axios.post(`${url}/orders`, data);
}

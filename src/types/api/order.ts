import { OrderItemType } from "types/OrderItemType";
  
export interface Order {
  userId: string;
  tableNumber: number;
  products: OrderItemType[];
}
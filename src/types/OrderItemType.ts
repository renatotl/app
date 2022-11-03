import { ProductResponse } from "./Product";

export interface OrderItemType {
  product: ProductResponse;// ela é do tipo ProductResponse do arquivo Oroduct.ts
  quantity: number;
  observation?: string;
}
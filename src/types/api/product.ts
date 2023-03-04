export interface Product {
    name: string;
    description: string;
    image: string;
    price: number;
  }
  
  export interface ProductUpdate {
    product: Product;
    id: string;
  }
  

  // resposta da api
  export interface ProductResponse {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    updatedAt?: string;
    createdAt?: string;
  }
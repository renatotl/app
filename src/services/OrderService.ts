// Vamos até `src/services` e criaremos o arquivo `OrderService.ts`:

import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { Order } from "types/api/order";// alteramos para order

export const OrderService = {
    // metodod de criação
  create: (order: Order) => {

    // mapeamentos nos produtos e interar/ so preciso do resto
    const products = order.products.map(({ product, ...rest }) => ({
      ...rest,
      productId: product.id,// so preciso de algumas propriedades
    }));


    return Api(endpoint.createOrder(), {
      method: "POST",
      // enviar o pedido o { ...order, products }
      body: JSON.stringify({ ...order, products }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  },
};
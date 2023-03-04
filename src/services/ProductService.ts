// Vamos até `src/services` e criaremos o arquivo `ProductService.ts`:

import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { Product, ProductResponse, ProductUpdate } from "types/api/product";// importanto as interfaces

export const ProductService = {
    // ontem a lista de produtos/ ela é do tipo <ProductResponse[] que vem da api
  getLista: (): Promise<ProductResponse[]> =>
    // executando
    Api(endpoint.listProducts(), {
        // metodod get
      method: "GET",
      // tratar a res e convertemos em json
    }).then((response) => response.json()),

    // cafdastrar produtos
  create: (product: Product) =>
  // passando metodo para ser executado
    Api(endpoint.createProduct(), {
        // segundo parametro 
      method: "POST",
      // converter o produto em json para ser enviado para aapi
      body: JSON.stringify(product),
      // não bloquear
      mode: "cors",
      // informando ue o conteudo é do tipo json
      headers: {
        "Content-Type": "application/json",
      },
      // tratar para json
    }).then((response) => response.json()),

    // busca de um produtor
  getById: (id: string) =>
  // metodo a ser executado
    Api(endpoint.productById(id), {
        // metodo get
      method: "GET",
      // convertendo em json
    }).then((response) => response.json()),

    // enviando na req o produto e o id
  updateById: ({ product, id }: ProductUpdate) =>
  // executar o metedo 
    Api(endpoint.productById(id), {
      
      method: "PATCH",
      // converter o body em json
      body: JSON.stringify(product),
      mode: "cors",
      // informando que e json
      headers: {
        "Content-Type": "application/json",
      },
      // tratar a res
    }).then((response) => response.json()),


    // muito parecido com get id
  deleteById: (id: string) =>
    Api(endpoint.productById(id), {
      method: "DELETE",
    }).then((response) => response.json()),
};
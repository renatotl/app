// Começaremos pela parte de autenticação. Vamos até `src/services` e criaremos o arquivo `AuthService.ts`:

import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { ErrorResponse } from "types/api/error";
import { Login, LoginResponse } from "types/api/login";
import { User } from "types/api/user";


// camada de serviço
export const AuthService = {
    // metodod / resposta no login oi erro na resposta
  login: (loginData: Login): Promise<LoginResponse & ErrorResponse> =>
  // o mtodo auth está dentro de endpoint
    Api(endpoint.auth(), {
        // metodo post
      method: "POST",
      // o que vou enviar no corpo  e convertendo o bodu em json para a api
      body: JSON.stringify(loginData),
      // para o backend aceite a req
      mode: "cors",
      // o que passar no cabeçalho: o conteudo é do tipo json
      headers: {
        "Content-Type": "application/json",
      },
      // a resposta da req vou converte em json
    }).then((response) => response.json()),


    // metodo EU e faz um get pra ver se o user é valido
  me: (): Promise<User> =>
    Api(endpoint.auth(), { method: "GET" }).then((response) => response.json()),
};
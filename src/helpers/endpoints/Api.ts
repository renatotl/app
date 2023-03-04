// Dentro da pasta `src/helpers/endpoints`, criaremos um arquivo chamado `Api.ts`:
import { LocalStorageKeys } from "types/LocalStorageKeys";// o token está aqui
import { Auth } from 'helpers/Auth';// verifica se o user está logando e podemos deslogar
import { LocalStorageHelper } from "helpers/LocalStorageHelper";

// argumentos das nossas req   array
type args = [input: RequestInfo, init?: RequestInit | undefined];

// o interceptador da req
function requestInterceptor(config: RequestInit | undefined) {
    if(config){

        // procura a propriedade token dentro do localstorage
        const token = {
            Authorization: `Bearer ${LocalStorageHelper.get(LocalStorageKeys.TOKEN)}`,
        };
        //espalhando todsas info do config
        config.headers = {...config.headers, ...token};
    }
}
// intercepta a resposta
// se  res é == 401 o user não é aaltorizado e desloga
function responseInterceptor(res: Response) {
    if (res.status === 401) Auth.logout();
}
// a resposta vem do backend
export const Api = async (...args: args): Promise<Response> => {
    // recebe os args
    let [url, config] = args;
    //passando pra ela os dados
    requestInterceptor(config);
    // aguardando  ve se é 401
    const response = await fetch(url, config);
    // interceptar a res
    responseInterceptor(response);
    // se não for 401 ele retorna
    return response;
}
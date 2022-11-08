import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { LocalStorageKeys } from "types/LocalStorageKeys";
import { RoutePath } from "types/routes";

export const Auth = {
  // o metodo isAuth verifica se está autendicado
  isAuth: (): boolean => {// true ou false
// executa LocalStorageHelper.get pegar o token armazenado lá a chave token
    const token = LocalStorageHelper.get(LocalStorageKeys.TOKEN);
// propriedade a ser buscada no localStorage
    const user = LocalStorageHelper.get(LocalStorageKeys.USER);
// se o token for dirente de nullo e ao mesmo tempo a propriedade user diferente de nullo ele retona true
    return token !== null && user !== null;
  },
  // metodo logaut desloga da aplicação
  logout: (): void => {// executa uma função sem retorno 
    // limpa todo o localStorage
    LocalStorageHelper.clear();
    // em seguida se redireciona para o logim/ por isso importamos o arquivo RoutePath
    // window.location função própria do js/ o replace recebe o caminho que deve nos direcionar.
    window.location.replace(RoutePath.LOGIN);
  },
};
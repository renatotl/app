import BoxLogin from "components/BoxLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as S from "./style";
import { useMutation } from "@tanstack/react-query"
import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { AuthService } from "services/AuthService";
import { ErrorResponse } from "types/api/error";
import { Login as LoginData, LoginResponse } from "types/api/login"
import { User } from "types/api/user";
import { LocalStorageKeys } from "types/LocalStorageKeys";

const Login = () => {

    const [errorMessage, setErrorMessage] = useState('');
    // necessário usar este cara para navegar para home
    const navigate = useNavigate();


    const mutation = useMutation(AuthService.login, {

        // poder ser um dos dois
        onSuccess: (data: LoginResponse & ErrorResponse) => {
            // o statusCode vem da req
          if (data.statusCode) {
            setErrorMessage(data.message);
            return;
          }
          if (data.token && data.user) {
            // gravando o token e o user no localStorage
            LocalStorageHelper.set<string>(LocalStorageKeys.TOKEN, data.token);
            LocalStorageHelper.set<User>(LocalStorageKeys.USER, data.user);
            // uma vez autentificado redirecionamos para a rota home
            navigate(RoutePath.HOME);
          }
          setErrorMessage("Tente novamente!");
        },
        onError: () => {
            setErrorMessage("Ocorreu um erro durante a requisição");
          },
        });




    // faz a navegação para tela home
    const handleSubmit = (data: LoginData) => {
        mutation.mutate(data);
        setErrorMessage("");
      }

    return (
        <S.Login>
            <S.LoginContent>
                <BoxLogin
                    onSubmitData={handleSubmit}
                    errorMessage={errorMessage}
                />
            </S.LoginContent>
        </S.Login>
    );
}

export default Login;

/*

 <BoxLogin
                    onSubmitData={handleSubmit}
                    errorMessage={errorMessage}
                />

essas propriedades vem lá do BoxLogin contendo a senha e o nickname
lembrando que é necessário passar as duas propriedades porque foi tipado la no BoxLogin que BoxLoginProps recebe duas propriedades 
*/
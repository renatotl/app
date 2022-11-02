import BoxLogin from "components/BoxLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as S from "./style";

const Login = () => {

    const [errorMessage, setErrorMessage] = useState('');
    // necessário usar este cara para navegar para home
    const navigate = useNavigate();

    // faz a navegação para tela home
    const handleSubmit = () => {
        //acionando navigante direcionando para home
        navigate(RoutePath.HOME);
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
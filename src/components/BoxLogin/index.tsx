import logo from 'assets/imgs/logo.png';
import ButtonLarge from 'components/ButtonLarge';
import { HTMLAttributes, useState } from 'react';
import * as S from "./style";

type BoxLoginType =  HTMLAttributes<HTMLDivElement>

export type BoxLoginProps = {
  // essa propriedade só é assionada quando tiver informação 
  onSubmitData: (data: {nickname: string, password: string}) => void
  errorMessage: string
} & BoxLoginType;

const BoxLogin = ({onSubmitData, errorMessage}: BoxLoginProps) => {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');



    // função que envia as informações digitadas/ ela é do tipo void porque não precisa retornar nada ela só vai enviar informaçao
    const handleSubmit = (): void => {
      // o data está recebendo de forma desconstruída {nickname, password}
        const data = {nickname, password};
        // mandando essas informações passando como propriedade
        onSubmitData(data);// já passando-á para nosso backend
    }
    

    return (
        <S.BoxLogin>
            <S.BoxLoginLogo>
                <S.BoxLoginLogoText>
                    <span>Pizza</span>
                    <span>Fresh</span>
                </S.BoxLoginLogoText>
                <S.BoxLoginLogoImage src={logo} alt="Logo"/>
            </S.BoxLoginLogo>
            <S.BoxLoginForm>
                <input
                    type="text"
                    placeholder="Nickname"
                    value={nickname}
                    onChange={({target}) => setNickname(target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={({target}) => setPassword(target.value)}
                />
                <ButtonLarge
                    value="Entrar"
                    type="button"
                    onClick={handleSubmit}/>
            </S.BoxLoginForm>
            { Boolean(errorMessage.length) && <S.BoxLoginError>{errorMessage}</S.BoxLoginError> }
        </S.BoxLogin>
    );
}

export default BoxLogin;

/*
            { Boolean(errorMessage.length) && <S.BoxLoginError>{errorMessage}</S.BoxLoginError> }

o Boolean verifica se é true or false e errorMessage.length verifica se tem algum valor em errorMessage. Se sim dipara o componente BoxLoginErro

 */ 

//onChange sempre que acontecer uma alteraçao no campo o usuário digitando ai acontece uma atualização do estado

/*
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={({target}) => setPassword(target.value)}
                />

  O target se refere ao campo input. Sempre que acontecer uma alteraçao no target/ campo, faça uma alteração. Passamos a função que altera oa estado



                */
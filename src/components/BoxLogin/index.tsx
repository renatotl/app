import * as S from "./style";
import logo from "assets/imgs/logo.png";
import ButtonLarge from "components/ButtonLarge";


const BoxLogin = () => {
  return (
    <S.BoxLogin>
      <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
          <span>Pizza</span>
          <span>Fresh</span>
        </S.BoxLoginLogoText>
        <S.BoxLoginLogoImage src={logo} alt="Logo" />
      </S.BoxLoginLogo>
      <S.BoxLoginForm>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <ButtonLarge value="Entrar" type="button" />
      </S.BoxLoginForm>
    </S.BoxLogin>
  );
};

export default BoxLogin;


// a propriedade value precisa ser definida lá em buttonLarge
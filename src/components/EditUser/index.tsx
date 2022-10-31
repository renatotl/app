import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";

//Agora vamos criar o componente EditUser. Este componente será um card responsável por editar os dados de um usuário
const EditUser = () => {
    return (
        <S.EditUser>
            <>
                <S.EditUserDetails>
                    <S.EditUserDetailsImageWrap>
                        <S.EditUserDetailsImage src="" alt="Foto de..." />
                    </S.EditUserDetailsImageWrap>
                    <S.EditUserDetailsTitle>Nome</S.EditUserDetailsTitle>
                    <S.EditUserDetailsText>
                        <b>usuário: </b> {/* usuário */}
                    </S.EditUserDetailsText>
                </S.EditUserDetails>

                <S.EditUserAction>
                    <Pencil /> Editar
                </S.EditUserAction>

            </>
            <S.EditFormGroup>
                <S.EditForm
                    type="text"
                    placeholder="Nome"
                />
                <S.EditForm
                    type="text"
                    placeholder="Nome de usuário"
                />
                <S.EditForm
                    type="password"
                    placeholder="Senha"
                />
                <S.EditForm
                    type="password"
                    placeholder="Confirmar Senha"
                />
                <S.EditForm
                    type="url"
                    placeholder="Imagem"
                />
                <S.Delete>Deletar</S.Delete>
            </S.EditFormGroup>
        </S.EditUser>
    );
}

export default EditUser;
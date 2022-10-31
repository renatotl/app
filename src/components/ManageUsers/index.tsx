
import { ReactComponent as Add } from "assets/icons/add.svg";
import { HTMLAttributes } from "react";
import * as S from "./style";
import EditUser from "components/EditUser";

type ManageUsersType = HTMLAttributes<HTMLDivElement>;

type ManageUsersProps = {} & ManageUsersType;
//Este componente será a subseção responsável por agregar os cards de edição de usuários, podendo também adicionar e até mesmo remover usuários
const ManageUsers = ({ ...props }: ManageUsersProps) => {
  return (
    <S.ManageUsers {...props}>
      <S.ManageUsersTitle>Gerenciar Usuários</S.ManageUsersTitle>
      <S.ManageUsersSub>
        <b>Usuários</b>
      </S.ManageUsersSub>
      <S.ManageUsersContent>
        <S.ManageUsersContentAdd>
          <Add />
          <span>Adicionar Usuário</span>
        </S.ManageUsersContentAdd>
        <S.ManageUsersContentAdd>
          <S.EditForm type="text" placeholder="Nome" />
          <S.EditForm type="text" placeholder="Nome de usuário" />
          <S.EditForm type="password" placeholder="Senha" />
          <S.EditForm type="password" placeholder="Confirmar Senha" />
          <S.EditForm type="url" placeholder="Imagem" />
        </S.ManageUsersContentAdd>
        <EditUser />
      </S.ManageUsersContent>
      <S.ManageUsersActions>
        <S.ManageUsersActionsCancel>Cancelar</S.ManageUsersActionsCancel>
        <S.ManageUsersActionsSave>Salvar Mudanças</S.ManageUsersActionsSave>
      </S.ManageUsersActions>
    </S.ManageUsers>
  );
};

export default ManageUsers;
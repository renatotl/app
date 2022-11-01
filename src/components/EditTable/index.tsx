import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";
// Este componente será um card responsável por editar os dados de uma mesa.

const EditTable = () => {
  return (
    <S.EditTable>
      <>
        <S.EditTableDetails>
          <S.EditTableDetailsName>Número da mesa</S.EditTableDetailsName>
        </S.EditTableDetails>
        <S.EditTableAction>
          <Pencil /> Editar
        </S.EditTableAction>
      </>

      <>
        <label htmlFor="tableId">Número da mesa</label>
        <S.EditForm id="tableId" type="number" placeholder="01" />
        <S.Deletar>Deletar Mesa</S.Deletar>
      </>
    </S.EditTable>
  );
};

export default EditTable;
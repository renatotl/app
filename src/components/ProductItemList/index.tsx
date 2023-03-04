import * as S from "./style";
import { TableResponse } from "types/api/table";


/*Até aqui o nosso botão de seguir para o pagamento fica habilitado a todo o momento, mesmo não contendo nenhum produto no pedido e nenhuma mesa selecionada.
Vamos configurá-lo para habilitar apenas quando tiver pelo menos um produto adicionado e uma selecionada.*/
interface ProductItemListProps {
  onSelectTable: (data: number) => void;
  children: React.ReactNode;
  tables: TableResponse[];
}

//children: React.ReactNode; referência ao node do react
// agora lá no Home não dá mais o erro no ProductItemList porque agora o children foi declarado/ como se o procutItem fosse um parâmetro
// e tivesse cido passado pra ca, mas lá no HOME

// criamos o children como parâmetro e ele precisa ser typado e foi passado dentro do return
const ProductItemList = ({ children, onSelectTable }: ProductItemListProps) => {



  return (
    <section>
      <S.ProductItemListHeader>
        <S.ProductItemListHeaderTitle>
          Escolha os sabores
        </S.ProductItemListHeaderTitle>
        <S.ProductItemListHeaderSelect
        // ativa uma função quando recebe um click na tag da mesa 
          onChange={({ target }) => onSelectTable(Number(target.value))}
          name="table"
          id="table"
        >
          <option value="default">Selecione a mesa</option>
          <option value="01">Mesa 01</option>
          <option value="02">Mesa 02</option>
        </S.ProductItemListHeaderSelect>
      </S.ProductItemListHeader>
      <S.ProductItemList>{children}</S.ProductItemList>
    </section>
  );
};

export default ProductItemList;



/* 
corrigindo o err do comopete home index.tsx

No arquivo index.tsx do componente ProductItemList, vamos inserir a interface com o seguinte código após os imports:
interface ProductItemListProps {
  children: React.ReactNode;
}
E vamos passar { children } como parâmetro do componente e também inserir dentro da tag ProductItemList

*/


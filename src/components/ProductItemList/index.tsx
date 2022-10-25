import * as S from "./style";

interface ProductItemListProps {
  children: React.ReactNode;
}


const ProductItemList = ({ children }: ProductItemListProps) => {



  return (
    <section>
      <S.ProductItemListHeader>
        <S.ProductItemListHeaderTitle>
          Escolha os sabores
        </S.ProductItemListHeaderTitle>
        <S.ProductItemListHeaderSelect>
          <option value="default">Selecione a mesa</option>
          <option value="">Mesa</option>
        </S.ProductItemListHeaderSelect>
      </S.ProductItemListHeader>{" "}
      <S.ProductItemList>
      { children }
      </S.ProductItemList>

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


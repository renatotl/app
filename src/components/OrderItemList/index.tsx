import * as S from "./style";
import React, { HTMLAttributes } from "react";
//Criaremos um DivType pois nosso componente será renderizado dentro de uma div:

type DivType = HTMLAttributes<HTMLDivElement>;
//E além do tipo DivType que escrevemos acima, vamos também criar o tipo OrderItemListProps com o seguinte código
// o react.node é como o DOM 

// O componente que vem o header, footer e list possuem tags html e precisam ser do TYPO reactnode

// como algumuns desses props possuem button então usamos o HTMLAttributes<HTMLDivElement>; caso nao ouvece coleta de informação. não iamos fazer divtype
export type OrderItemListProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  list: React.ReactNode;
} & DivType;

const OrderItemList = ({
  header,
  list,
  footer,
  ...props
}: OrderItemListProps) => {
  return (
    <div {...props}>
      {header && <S.OrderItemListTitle> {header} </S.OrderItemListTitle>}

      <S.OrderItemList role="listbox">{list}</S.OrderItemList>

      {footer && <footer> {footer} </footer>}
    </div>
  );
};

export default OrderItemList;

/* A tag OrderItemListTitle receberá o header das propriedades.
A tag OrderItemList receberá a lista de itens das propriedades.
E uma tag footer padrão, recebendo o footer das propriedades */

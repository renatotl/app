import { ReactComponent as Trash } from "assets/icons/trash.svg";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { ProductResponse } from "types/Product";
import * as S from "./style";

type DivType = ButtonHTMLAttributes<HTMLDivElement>;

export type OrderItemProps = {
  product: ProductResponse;
  quantity: number;
  observation?: string;
  onRemoveItem?: () => void;
} & DivType;

// props que são funções, elas devolvem do filho para o pai
// props que não são funções, devolvel do pai para o filho
const OrderItem = ({
  product,
  quantity,
  observation = "",
  onRemoveItem,
  ...props
}: OrderItemProps) => {
  const [quantityState, setQuantityState] = useState(quantity);

// Vamos criar algumas funções para que quando o usuário clique em uma pizza, ela seja adicionada automaticamente na lista do pedido
  const [observationState, setObservationState] = useState(observation);


  // responsável por alterar a descrição
  const handleObservation = (data: string) => {
    // o valor da quantidade é recebido em data
    setObservationState(data);
  };

  // responsável por alterar a quantidade
  const handleQuantity = (data: number) => {
    setQuantityState(data);
  };

  useEffect(() => {
    handleObservation(observation);// descrição do pedido
  }, [observation]);

  useEffect(() => {
    handleQuantity(quantity);
  }, [quantity]);



  return (
    <S.OrderItem {...props} role="listitem">
      <S.OrderItemLeft>
        <S.OrderItemLeftTop>
          <S.OrderItemProduct>
            <S.OrderItemProductImage
              src={product.image}
              alt={`Pizza de ${product.name}`}
            />
            <S.OrderItemProductDetails>
              <S.OrderItemProductDetailsName>
                {product.name}
              </S.OrderItemProductDetailsName>
              <S.OrderItemProductDetailsPrice>
                R$ {product.price}
              </S.OrderItemProductDetailsPrice>
            </S.OrderItemProductDetails>
          </S.OrderItemProduct>
          <S.OrderItemQuantity
            type="number"
            value={quantityState}
            onChange={({ target }) => {
              setQuantityState(Number(target.value));
            }}
          />
        </S.OrderItemLeftTop>
        <S.OrderItemLeftObservation
          type="text"
          placeholder="Observações do pedido"
           value={observationState}
          onChange={({ target }) => {
            setObservationState(target.value);
          }}
        />
      </S.OrderItemLeft>
      <S.OrderItemRight>
        <S.OrderItemRightTotalPrice>
          R$ {Number(product.price * quantityState).toFixed(2)}
        </S.OrderItemRightTotalPrice>
        <S.OrderItemRightTrash onClick={onRemoveItem}>
          <Trash />
        </S.OrderItemRightTrash>
      </S.OrderItemRight>
    </S.OrderItem>
  );
};

export default OrderItem;

/*
            value={quantityState}

 onChange={({ target }) => {
              setQuantityState(Number(target.value));

              pega o valor digitado pelo usuário e coloca no             value={quantityState}

              */
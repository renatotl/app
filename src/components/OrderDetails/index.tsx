import ButtonLarge from "components/ButtonLarge";
import ButtonToggle from "components/ButtonToggle";
import OrderItem from "components/OrderItem";
import OrderItemList from "components/OrderItemList";
import { HTMLAttributes, useEffect, useState } from "react";
import { OrderItemType } from "types/OrderItemType";
import { OrderType } from "types/orderType";
import * as S from "./style";


// o OrderDetails é como um container de outros pedidos com informção
type OrderDetailsType = HTMLAttributes<HTMLDivElement>;

type OrderDetailsProps = {
  orders: OrderItemType[];
  onChangeActiveOrderType: (data: OrderType) => void;
  onRemoveItem: (id: string) => void;
  activeOrderType: OrderType;
} & OrderDetailsType;




const OrderDetails = ({
  orders,
  onChangeActiveOrderType,
  onRemoveItem,
  activeOrderType,
}: OrderDetailsProps) => {

  //Vamos montar a lógica para que o valor do subtotal seja calculado no final do pedido.

  const price = orders
  //interando para cada item do array/ pegando o preço e multiplicando pela quantidade
    .map((i) => i.product.price * i.quantity)
    //"a" acumulador que somou todos os itens/ "b" é o valor atual
    .reduce((a, b) => a + b, 0);// a + b começa em 0


    // atualiza o valor da tela quando a gente add ou remove alguns item da lista
  const [priceState, setPriceState] = useState(price);
// sempre que acontece uma determinada atualização na variável orders, price. ele atualiza
  useEffect(() => {
    setPriceState(price);
  }, [orders, price]);

  return (
    <S.OrderDetails>
      <S.OrderDetailsTitle>Detalhes do Pedido</S.OrderDetailsTitle>
      <S.OrderDetailsButtonGroup>
        <ButtonToggle
          onClick={() => onChangeActiveOrderType(OrderType.COMER_NO_LOCAL)}
          active={activeOrderType === OrderType.COMER_NO_LOCAL}
          value="Comer no Local"
        />
        <ButtonToggle
          onClick={() => onChangeActiveOrderType(OrderType.PARA_VIAGEM)}
          active={activeOrderType === OrderType.PARA_VIAGEM}
          value="P/ Viagem"
        />
        <ButtonToggle
          onClick={() => onChangeActiveOrderType(OrderType.DELIVERY)}
          active={activeOrderType === OrderType.DELIVERY}
          value="Delivery"
        />
      </S.OrderDetailsButtonGroup>
      <S.OrderDetailsList>
        <OrderItemList
          header={
            <S.OrderDetailsListTitle>
              <h4>Item</h4>
              <h4>Qtd</h4>
              <h4>Preço</h4>
            </S.OrderDetailsListTitle>
          }
          list={
            Boolean(orders.length) ? (
              orders.map((item, index) => (
                <OrderItem
                onRemoveItem={() => onRemoveItem(item.product.id)}
                  product={item.product}
                  quantity={item.quantity}
                  observation={item.observation}
                  key={`OrderDetails-${index}`}
                />
              ))
            ) : (
              <S.OrderDetailsListGap />
            )
          }
          footer={
            <S.OrderDetailsListFooter>
              <S.OrderDetailsListFooterRow>
              <span>Subtotal</span>
                <span>R$ {priceState.toFixed(2)}</span>
              </S.OrderDetailsListFooterRow>
              <ButtonLarge value="Continue para o pagamento" />
            </S.OrderDetailsListFooter>
          }
        />
      </S.OrderDetailsList>
    </S.OrderDetails>
  );
};

export default OrderDetails;
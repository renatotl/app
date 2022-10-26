import * as S from "./style";
import ButtonToggle from "components/ButtonToggle";
import OrderItemList from "components/OrderItemList";
import ButtonLarge from "components/ButtonLarge";

// o OrderDetails é como um container de outros pedidos com informaçoes
const OrderDetails = () => {
  return (
    <S.OrderDetails>
      <S.OrderDetailsTitle>Detalhes do Pedido</S.OrderDetailsTitle>
      <S.OrderDetailsButtonGroup>
        <ButtonToggle active={true} value="Comer no Local" />
        <ButtonToggle active={false} value="P/ Viagem" />
        <ButtonToggle active={true} value="Delivery" />
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
          list={"Lista de Itens"}
          footer={
            <S.OrderDetailsListFooter>
              <S.OrderDetailsListFooterRow>
                <span>Subtotal</span>
                <span>R$ 10.00</span>
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

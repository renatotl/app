import { HTMLAttributes, useState } from "react";
import CheckboxIcon from "components/CheckboxIcon";
import OrderConfirmation from "components/OrderConfirmation";

import { ReactComponent as Card } from "assets/icons/credit-card.svg";
import { ReactComponent as Cash } from "assets/icons/wallet.svg";

import * as S from "./style";
import { OrderItemType } from "types/OrderItemType";
import { OrderType } from "types/orderType";
import { PaymentMethod } from "types/PaymentMethod";


type CheckoutSectionType = HTMLAttributes<HTMLDivElement>;

type CheckoutSectionProps = {
  orders: OrderItemType[];
  selectedTable?: number;
  onOrdersChange: (orders: OrderItemType[]) => void;
  onChangeActiveOrderType: (data: OrderType) => void;
  activeOrderType: OrderType;
  onCloseSection: () => void;
} & CheckoutSectionType;

//Este componente será responsável por coordenar a confirmação de pagamento e fechamento de pedidos

const CheckoutSection = ({
  orders,
  selectedTable,
  onOrdersChange,
  onChangeActiveOrderType,
  activeOrderType,
  onCloseSection,
}: CheckoutSectionProps) => {
  const [closing, setClosing] = useState<boolean>(false);

// método de pagamento ueState
  const [activeMethod, setActiveMethod] = useState<PaymentMethod>();


  const handleCloseSection = () => {
    setClosing(true);
    setTimeout(onCloseSection, 800);
  };
  
  return (
    <S.CheckoutSection closing={closing}>
      <S.CheckoutSectionConfirmation>
        <S.BackIcon onClick={handleCloseSection} />
        <OrderConfirmation orders={orders} onOrdersChange={onOrdersChange} />
      </S.CheckoutSectionConfirmation>
      <S.CheckoutSectionPayment>
        <S.CheckoutSectionPaymentHead>Pagamento</S.CheckoutSectionPaymentHead>
        <S.CheckoutSectionPaymentSub>
          2 métodos de pagamento disponíveis
        </S.CheckoutSectionPaymentSub>
        <S.CheckoutSectionPaymentForm>
          <S.CheckoutSectionPaymentFormTitle>
            Método de Pagamento
          </S.CheckoutSectionPaymentFormTitle>
          <S.PaymentForm>
            <S.PaymentFormCheckbox>
              <CheckboxIcon
                onClick={() => setActiveMethod(PaymentMethod.CARD)}
                active={activeMethod === PaymentMethod.CARD}
                value="Cartão"
                icon={<Card />}
              />
              <CheckboxIcon
                onClick={() => setActiveMethod(PaymentMethod.CASH)}
                active={activeMethod === PaymentMethod.CASH}
                value="Dinheiro"
                icon={<Cash />}
              />
            </S.PaymentFormCheckbox>
            {activeMethod === PaymentMethod.CARD && (
              <>
                <S.PaymentFormGroup>
                  <label htmlFor="titular">Titular do cartão</label>
                  <input
                    type="text"
                    name="titular"
                    id="titular"
                    placeholder="Wheslley Rimar"
                  />
                </S.PaymentFormGroup>

                <S.PaymentFormGroup>
                  <label htmlFor="card">Número do cartão</label>
                  <input
                    type="text"
                    name="card"
                    id="card"
                    placeholder="2564 1421 0897 1244"
                  />
                </S.PaymentFormGroup>

                <S.PaymentFormHalf>
                  <S.PaymentFormHalfItem>
                    <label htmlFor="validity">Validade</label>
                    <input
                      type="text"
                      name="card"
                      id="validity"
                      placeholder="05/2022"
                    />
                  </S.PaymentFormHalfItem>
                  <S.PaymentFormHalfItem>
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" name="cvv" id="cvv" placeholder="140" />
                  </S.PaymentFormHalfItem>
                </S.PaymentFormHalf>
              </>
            )}
          </S.PaymentForm>
        </S.CheckoutSectionPaymentForm>
        <S.PaymentActions>
          <S.PaymentActionsDetails>
            <S.PaymentActionsDetailsOrderType>
              <label htmlFor="card">Tipo de pedido</label>
              <select
                onChange={({ target }) =>
                  onChangeActiveOrderType(target.value as OrderType)
                }
                name="order-type"
                id="order-type"
                value={Object.values(OrderType)
                  .filter((option) => option === activeOrderType)
                  .pop()}
              >
                {Object.values(OrderType).map((value, idx) => (
                  <option key={`OrderType-${idx}`} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </S.PaymentActionsDetailsOrderType>
            <S.PaymentActionsDetailsTableNumber>
              <label htmlFor="card">Número da mesa</label>
              <input
                type="text"
                name="table"
                id="table"
                placeholder="01"
                disabled
                value={selectedTable}
              />
            </S.PaymentActionsDetailsTableNumber>
          </S.PaymentActionsDetails>

          <S.PaymentActionsButtonGroup>
            <S.PaymentActionsButtonGroupCancel>
              Cancelar
            </S.PaymentActionsButtonGroupCancel>
            <S.PaymentActionsButtonGroupConfirm>
              Confirmar Pagamento
            </S.PaymentActionsButtonGroupConfirm>
          </S.PaymentActionsButtonGroup>
        </S.PaymentActions>
      </S.CheckoutSectionPayment>
    </S.CheckoutSection>
  );
};

export default CheckoutSection;


// o metodo filter cria um novo array 
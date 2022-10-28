import styled, { css, keyframes } from "styled-components";
import { ReactComponent as Back } from "assets/icons/back.svg";

/* Criamos as animações `slideShow`e `slideHide` para definir posteriormente o mecanismo de exibição da barra lateral. */

const slideShow = keyframes`
	from {
		right: -100vw;
	}
	to {
		right: 0;
	}
`;

const slideHide = keyframes`
	from {
		right: 0;
	}
	to {
		right: -100vw;
	}
`;

/* Abaixo seguem os modificadores de estado da animação */

const CheckoutSectionModifiers = {
  closing: () => css`
    animation: ${slideHide} 1s;
  `,
};

type CheckoutSectionStyled = { closing: boolean };

export const CheckoutSection = styled.section<CheckoutSectionStyled>`
  ${({ theme, closing }) => css`
    background: ${theme.colors.baseBg2};
    right: 0;
    position: absolute;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    border-radius: 16px 0 0 16px;
    animation: ${slideShow} 1s;
    ${closing && CheckoutSectionModifiers.closing()};
  `}
`;

export const CheckoutSectionConfirmation = styled.div`
  ${({ theme }) => css`
    border-right: 1px solid ${theme.colors.baseLine};
    padding: 15px;
  `}
`;

export const BackIcon = styled(Back)`
  ${() => css`
    cursor: pointer;
  `}
`;

export const CheckoutSectionPayment = styled.div`
  ${() => css`
    width: 400px;
    padding: 15px;
    max-height: 100vh;
    overflow: auto;
  `}
`;

export const CheckoutSectionPaymentHead = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.headingStyle()};
    margin: 32px 0 0 0;
  `}
`;

export const CheckoutSectionPaymentSub = styled.h4`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    margin: 0;
    color: ${theme.colors.textLight};
    font-size: 16px;
    font-weight: 500;
    margin: 8px 0 25px 0;
  `}
`;

export const CheckoutSectionPaymentForm = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.baseLine};
    border-bottom: 1px solid ${theme.colors.baseLine};
    padding: 15px 0;
  `}
`;

export const CheckoutSectionPaymentFormTitle = styled.h4`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  `}
`;

export const PaymentForm = styled.form`
  ${({ theme }) => css`
    min-height: 340px;
    label {
      ${theme.mixins.bodyStyle()};
      font-weight: 500;
    }
    input {
      margin-top: 8px;
      ${theme.mixins.input()};
      color: ${theme.colors.textColor};
    }
  `}
`;

export const PaymentFormCheckbox = styled.div`
  ${() => css`
    display: flex;
    margin-top: 15px;
    gap: 10px;
  `}
`;

export const PaymentFormGroup = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  `}
`;

export const PaymentFormHalf = styled.div`
  ${() => css`
    display: flex;
    margin-top: 15px;
    gap: 15px;
  `}
`;

export const PaymentFormHalfItem = styled.div`
  ${() => css`
    display: flex;
    width: 50%;
    flex-direction: column;
  `}
`;

export const PaymentActions = styled.div`
  ${() => css`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `}
`;

export const PaymentActionsDetails = styled.div`
  ${() => css`
    display: flex;
    gap: 15px;
  `}
`;

export const PaymentActionsDetailsOrderType = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
    select {
      ${theme.mixins.select(false)};
    }
  `}
`;

export const PaymentActionsDetailsTableNumber = styled.div`
  ${({ theme }) => css`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    ${theme.mixins.bodyStyle()};
    font-weight: 500;
    input {
      color: ${theme.colors.textColor};
      ${theme.mixins.input()};
    }
  `}
`;

export const PaymentActionsButtonGroup = styled.div`
  ${() => css`
    display: flex;
    gap: 15px;
  `}
`;

export const PaymentActionsButtonGroupCancel = styled.button`
  ${({ theme }) => css`
    width: 50%;
    ${theme.mixins.buttonOutline(theme.colors.secondaryColor)};
  `}
`;

export const PaymentActionsButtonGroupConfirm = styled.button`
  ${({ theme }) => css`
    width: 50%;
    ${theme.mixins.buttonFilled()};
  `}
`;
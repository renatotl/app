import styled, { css } from "styled-components";

export const OrderConfirmation = styled.div`
  ${() => css`
    width: 400px;
    max-height: 100vh;
    overflow: auto;
  `}
`;

export const OrderConfirmationHead = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.headingStyle()};
    margin: 15px 0 0 0;
  `}
`;

export const OrderConfirmationSub = styled.h4`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    margin: 0;
    color: ${theme.colors.textLight};
    font-size: 16px;
    font-weight: 500;
    margin: 8px 0 25px 0;
  `}
`;

export const OrderItemLeft = styled.div`
  ${() => css`
    width: 80%;
  `}
`;

export const OrderConfirmationFooter = styled.div`
  ${() => css`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  `}
`;

export const OrderConfirmationFooterRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    ${theme.mixins.bodyStyle()};
    span:nth-child(1) {
      color: $text-light;
      font-weight: 400;
    }
    span:nth-child(2) {
      color: ${theme.colors.textColor};
      font-size: 16px;
      font-weight: 500;
    }
  `}
`;
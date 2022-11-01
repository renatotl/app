import styled, { css } from "styled-components";

export const EditTable = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg2};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    max-width: 200px;
    width: 100%;
    height: 200px;
    max-height: 285px;
    border: 1px solid ${theme.colors.baseLine};
    position: relative;
    /* Chrome */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
    label {
      text-transform: uppercase;
      ${theme.mixins.bodyStyle()}
      font-size: 20px;
      font-weight: 500;
    }
  `}
`;

export const EditTableImage = styled.img`
  ${() => css`
    width: 130px;
  `}
`;

export const EditTableDetails = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
  `}
`;

export const EditTableDetailsName = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.headingStyle()};
    transform: translateY(-25px);
    text-align: center;
  `}
`;

export const EditTableAction = styled.button`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    border: none;
    padding: 14px;
    box-sizing: border-box;
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.primaryColor};
    background: ${theme.colors.primaryColorOpacity};
    gap: 8px;
    border-radius: 0 0 8px 8px;
    cursor: pointer;
    position: absolute;
    bottom: 0;
  `}
`;

export const EditForm = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.input()};
    color: ${theme.colors.textColor};
  `}
`;

export const Deletar = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonOutline(theme.colors.secondaryColor)};
  `}
`;
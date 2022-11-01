import styled, { css } from "styled-components";

export const ManageTables = styled.section`
  ${({ theme }) => css`
    padding: 20px;
  `}
`;

export const ManageTablesTitle = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    font-size: 20px;
    margin: 0;
  `}
`;

export const ManageTablesSub = styled.h2`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    margin: 25px 0 0 0;
    border-bottom: 1px solid ${theme.colors.baseLine};
    color: ${theme.colors.primaryColor};
    padding-bottom: 10px;
    b {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -13px;
        width: 100%;
        height: 4px;
        background-color: ${theme.colors.primaryColor};
        border-radius: 5rem;
      }
    }
  `}
`;

export const ManageTablesContent = styled.div`
  ${() => css`
    margin-top: 15px;
    justify-content: center;
    height: 400px;
    padding-bottom: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    overflow: auto;
  `}
`;
export const ManageTablesContentAdd = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    color: ${theme.colors.primaryColor};
    ${theme.mixins.bodyStyle()};
    font-weight: 500;
    border: 1px dashed ${theme.colors.primaryColor};
    height: 200px;
    border-radius: 8px;
    gap: 10px;
    cursor: pointer;
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
      ${theme.mixins.bodyStyle()};
      font-size: 20px;
      font-weight: 500;
    }
  `}
`;

export const ManageTablesActions = styled.div`
  ${() => css`
    margin-top: 20px;
    display: flex;
    gap: 10px;
  `}
`;

export const ManageTablesActionsCancel = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonOutline(theme.colors.secondaryColor)};
  `}
`;

export const ManageTablesActionsSave = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonFilled()};
  `}
`;

export const EditForm = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.input()};
    color: ${theme.colors.textColor};
  `}
`;
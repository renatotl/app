import styled, { css } from "styled-components";
import { Theme } from "types/styled-components";

export const EditProduct = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg2};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    max-width: 200px;
    width: 100%;
    min-height: 225px;
    max-height: 285px;
    padding-top: 10px;
    border: 1px solid ${theme.colors.baseLine};
    box-sizing: border-box;
  `}
`;

export const EditProductImage = styled.img`
  ${() => css`
    width: 130px;
  `}
`;

export const EditProductDetails = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
  `}
`;

export const EditProductDetailsName = styled.h3`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    text-align: center;
    max-width: 90%;
    margin: 0;
  `}
`;

export const EditProductDetailsPrice = styled.strong`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.primaryColor};
    text-align: center;
    max-width: 90%;
    margin: 0;
  `}
`;

export const EditProductDetailsDescription = styled.small`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    font-size: 12px;
    text-align: center;
    max-width: 90%;
    margin: 0;
  `}
`;

export const EditProductAction = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.primaryColor};
    background: ${theme.colors.primaryColorOpacity};
    gap: 8px;
    border-radius: 0 0 8px 8px;
    cursor: pointer;
  `}
`;

export const Delete = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonOutline(theme.colors.secondaryColor)};
  `}
`;

export const EditFormGroup = styled.div`
  ${() => css`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
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
  `}
`;

const EditFormMixins = {
  error: (theme: Theme) => css`
    border: 2px solid ${theme.colors.secondaryColor};
  `,
  success: (theme: Theme) => css`
    border: 2px solid ${theme.colors.primaryColor};
  `,
};

export const EditForm = styled.input<{ error?: boolean; success?: boolean }>`
  ${({ theme, error = false, success }) => css`
    ${theme.mixins.input()};
    color: ${theme.colors.textColor};
    height: 40px;
    ${error && EditFormMixins.error(theme)}
    ${success && EditFormMixins.success(theme)}
    &:valid[type="url"] {
      ${success && EditFormMixins.success(theme)}
    }
    &:invalid {
      ${EditFormMixins.error(theme)}
    }
  `}
`;
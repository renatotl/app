import styled, { css } from "styled-components";
import { Theme } from "types/styled-components";

export const ManageUsers = styled.section`
  ${() => css`
    padding: 20px;
  `}
`;

export const ManageUsersTitle = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    font-size: 20px;
    margin: 0;
  `}
`;

export const ManageUsersSub = styled.h2`
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

export const ManageUsersContent = styled.div`
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
export const ManageUsersContentAdd = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    max-height: 320px;
    box-sizing: border-box;
    padding: 10px 0;
    color: ${theme.colors.primaryColor};
    ${theme.mixins.bodyStyle()};
    font-weight: 500;
    border: 1px dashed ${theme.colors.primaryColor};
    border-radius: 8px;
    gap: 10px;
    cursor: pointer;
  `}
`;

export const ManageUsersActions = styled.div`
  ${() => css`
    margin-top: 20px;
    display: flex;
    gap: 10px;
  `}
`;

export const ManageUsersActionsCancel = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonOutline(theme.colors.secondaryColor)};
  `}
`;

export const ManageUsersActionsSave = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonFilled()};
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
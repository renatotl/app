import styled, { css } from "styled-components";
import { Theme } from "types/styled-components";

export const EditUser = styled.div`
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
    max-height: 320px;
    box-sizing: border-box;
    border: 1px solid ${theme.colors.baseLine};
  `}
`;

export const EditUserDetails = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    gap: 5px;
  `}
`;

export const EditUserDetailsTitle = styled.h3`
  ${({ theme }) => css`
    ${theme.mixins.headingStyle()};
    text-align: center;
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-height: 40px;
    font-weight: 700;
    margin: 0;
  `}
`;

export const EditUserDetailsText = styled.p`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    text-align: center;
    max-width: 90%;
    font-weight: 500;
    margin: 0;
  `}
`;

export const EditUserDetailsImageWrap = styled.div`
  ${() => css`
    width: 90%;
    height: 150px;
    border-radius: 50%;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `}
`;

export const EditUserDetailsImage = styled.img`
  ${() => css`
    width: 100%;
    /* max-height: 100%; */
    border-radius: 50%;
  `}
`;

export const EditUserAction = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 14px;
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

const EditFormMixins = {
  error: (theme: Theme) => css`
    border: 2px solid ${theme.colors.secondaryColor};
  `,
};

export const EditFormGroup = styled.div`
  ${() => css`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
  `}
`;

export const EditForm = styled.input<{ error?: boolean }>`
  ${({ theme, error = false }) => css`
    ${theme.mixins.input()};
    color: ${theme.colors.textColor};
    height: 40px;
    ${error && EditFormMixins.error(theme)}
    &:invalid {
      ${EditFormMixins.error(theme)}
    }
  `}
`;
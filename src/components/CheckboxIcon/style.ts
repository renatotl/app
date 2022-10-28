import styled, { css } from "styled-components";
import { Theme } from "types/styled-components";
import { ReactComponent as Check } from "assets/icons/check.svg";

type CheckboxIconStyled = { active: boolean };

 const CheckboxIconModifiers = {
  active: (theme: Theme) => css`
    border: 1px solid ${theme.colors.textLight};
    background: ${theme.colors.baseBg1};
    color: ${theme.colors.textColor};
  `,
};

export const CheckboxIcon = styled.div<CheckboxIconStyled>`
  ${({ theme, active }) => css`
    height: 64px;
    width: 100px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.baseBg1};
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.textLight};
    font-weight: 500;
    cursor: pointer;
    ${active && CheckboxIconModifiers.active(theme)}
  `}
`;

export const CheckboxIconCheck = styled(Check)`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    position: absolute;
    top: 5px;
    right: 5px;
  `}
`;
import styled, { css } from "styled-components";
import { Theme } from "types/styled-components";

const NavColumnItemModifiers = {
  active: (theme: Theme) => css`
    background: ${theme.colors.primaryColorOpacity};
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 50%;
      transform: translateY(50%);
      width: 4px;
      height: 50%;
      background-color: #6cea69;
      border-radius: 5rem;
    }
  `,
};

type NavColumnItemStyled = { active: boolean };

export const NavColumnItem = styled.div<NavColumnItemStyled>`
  ${({ theme, active }) => css`
    background-color: ${theme.mixins.bodyStyle()};
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 24px;
    gap: 8px;
    ${active && NavColumnItemModifiers.active(theme)}
  `}
`;

export const NavColumnItemIcon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textLight};
  `}
`;

export const NavColumnItemDetailsTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    font-weight: 500;
  `}
`;

export const NavColumnItemDetailsSub = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textLight};
    font-size: 12px;
  `}
`;
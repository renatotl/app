import styled, { css } from "styled-components";

export const NavColumn = styled.menu`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    width: 275px;
    min-height: calc(100vh - 120px);
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0;
    padding: 0;
  `}
`;
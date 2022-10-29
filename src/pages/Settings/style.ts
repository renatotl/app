import styled, { css } from "styled-components";

export const Settings = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    min-width: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
  `}
`;

export const SettingsPage = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: calc(100% - 100px);
    max-height: 100vh;
    padding: 25px;
    box-sizing: border-box;
  `}
`;

export const SettingsPageHeaderTitle = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.headingStyle()};
    margin: 0;
  `}
`;

export const SettingsContent = styled.main`
  ${() => css`
    display: flex;
    gap: 25px;
    margin-top: 25px;
  `}
`;

export const SettingsContentSidebar = styled.aside`
  ${() => css`
    menu {
      margin: 0;
    }
  `}
`;

export const SettingsContentBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    width: 100%;
    border-radius: 8px;
  `}
`;

export const SettingsContentBoxEmpty = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    ${theme.mixins.headingStyle()};
    font-weight: 500;
    text-transform: uppercase;
  `}
`;
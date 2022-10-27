import styled, { css } from "styled-components";

export const Overlay = styled.header`
  ${({ theme }) => css`
	width: 100vw;
	height: 100vh;
	position: fixed;
	display: flex;
	${theme.mixins.overlay()};
	z-index: 999;
  `}
`
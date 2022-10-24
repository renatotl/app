import styled, { css } from "styled-components";
import pattern from "assets/imgs/pizza-pattern.png";

export const Login = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg2};
		background-image: url(${pattern});
		background-size: cover;/* faz compri a tela inteira */
		background-position: center;
		width: 100vw;
		height: 100vh;
	`}
`;

export const LoginContent = styled.main`
	${({ theme }) => css`
		width: 100%;
		height: 100%;
		${theme.mixins.overlay()};
		display: flex;
		justify-content: center;
		align-items: center; ;
	`}
`;
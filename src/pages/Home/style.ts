import styled, { css } from "styled-components";


export const Home = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		min-width: 100vw;
		min-height: 100vh;
		color: ${theme.colors.textColor};
		display: flex;
		justify-content: space-between;
	`}
`;

//Voltando no style, vamos criar a const HomeContent estilizando a tag main:
export const HomeContent = styled.main`
	${() => css`
		width: calc(100% - 450px);
		padding: 20px;
		overflow: auto;
		height: 100vh;
		box-sizing: border-box;
	`}
`;



//vamos criar a const HomeHeaderDetails para estilizar uma tag div onde iremos inserir a nossa Logo:
export const HomeHeaderDetails = styled.div`
	${() => css`
		display: flex;
		justify-content: space-between;
	`}
`;


// vamos criar as consts HomeHeaderDetailsLogo e HomeHeaderDetailsDate, estilizando a Logo e a data:
export const HomeHeaderDetailsLogo = styled.h1`
	${({ theme }) => css`
		${theme.mixins.logoStyle};
		text-transform: uppercase;
		margin: 0;
	`}
`;

export const HomeHeaderDetailsDate = styled.p`
	${() => css`
		text-transform: capitalize;
	`}
`;



// vamos definir a const HomeHeaderDetailsSearch que será o componente estilizado para a barra de pesquisa:
export const HomeHeaderDetailsSearch = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: 10px;
		${theme.mixins.input()};
		padding-top: 0;
		padding-bottom: 0;
		padding-right: 0;
		input {
			background: transparent;
			border: none;
			height: 100%;
			color: ${theme.colors.textColor};
		}
	`}
`;


//Voltando ao style.ts, vamos criar algumas consts para a estilização dos produtos na home:
export const HomeProductTitle = styled.h2`
	${({ theme }) => css`
		margin: 0;
		border-bottom: 1px solid ${theme.colors.baseLine};
		${theme.mixins.bodyStyle()};
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

export const HomeProductList = styled.div`
	${() => css`
		margin-top: 25px;
		padding-bottom: 25px;
	`}
`;

export const HomeProductListGap = styled.div`
	${({ theme }) => css`
		width: 200px;
	`}
`;

/* 
Como vamos utilizar a biblioteca Styled Components para trabalhar com o CSS no nosso projeto, vale lembrar que a biblioteca torna possível que escrevamos, por exemplo, o CSS de uma div em um arquivo .js ou .ts, transformando então uma const em uma tag HTML já estilizada.
*/

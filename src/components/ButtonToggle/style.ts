import styled, { css } from "styled-components";

type ButtonToggleStyled = { active: boolean };

export const ButtonToggle = styled.button<ButtonToggleStyled>`
	${({ theme, active }) => css`
		${theme.mixins.buttonToggle()};
		${theme.mixins.bodyStyle()};
		font-weight: 600;
		${active && theme.mixins.buttonToggle(true)};
	`}
`;
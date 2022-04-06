import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledSwitchContainer = styled.label`
	display: inline-block;
	white-space: nowrap;
	user-select: none;
	transition: all 250ms ease;
	padding: 0.125rem 0;
	position: relative;
	cursor: pointer;
`;

export const StyledSwitchInput = styled.input`
	border: 0px;
	clip: rect(0px, 0px, 0px, 0px);
	height: 1px;
	width: 1px;
	margin: -1px;
	padding: 0px;
	overflow: hidden;
	white-space: nowrap;
	position: absolute;
`;

export const StyledSwitchCircle = styled.span`
	position: absolute;
	display: flex;
	width: calc(2.5rem * 0.7);
	height: calc(2.5rem * 0.7);
	justify-content: center;
	align-items: center;
	top: 50%;
	transform: translateY(-50%);
	left: calc(5rem / 15);
	transition: left 0.25s ease, width 0.2s ease;
	background: ${({ theme }) => theme.color.gray300};
	border-radius: 9999px;
	svg: {
		background: transparent;
		size: calc(2.5rem * 0.44);
	}
	${({ checked, theme }) =>
		checked &&
		css`
			background: ${theme.color.blue100};
			left: calc(100% - (5rem / 15) - 2.5rem * 0.7);
		`}
`;

export const StyledSwitch = styled.div`
	opacity: 1;
	width: 5rem;
	height: 2.5rem;
	transition: all 250ms ease;
	position: relative;
	overflow: hidden;
	padding: 0;
	border-radius: 9999px;
	background: ${({ theme }) => theme.color.gray100};
	transition: none;
	border: 1px solid #c5c5c5;
	${({ checked, theme }) =>
		checked &&
		css`
			background: ${theme.color.blue200};
			border: 1px solid #2f80ed;
		`}
`;

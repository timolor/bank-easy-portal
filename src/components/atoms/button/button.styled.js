import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const spin = keyframes`
	from {
	transform: rotate(0deg);
	}
	to {
	transform: rotate(360deg);
	}
`;

export const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.color.primary};
	border: none;
	border-radius: 5px;
	color: ${({ theme }) => theme.color.black};
	padding: 11px 24px;
	font-weight: ${({ theme }) => theme.font.weight.bold};
	font-size: ${({ theme }) => theme.font.size[3]};
	line-height: 20px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		margin-right: 8px;
		margin-top: 2px;
	}

	&:hover {
		background: ${({ theme }) => theme.color.yellow300};
		transition: all 0.45s ease 0s;
	}

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

	${({ disabled }) =>
		disabled &&
		css`
			pointer-event: none;
			cursor: not-allowed;
			opacity: 0.5;
		`} 

	${({ rounded }) =>
		rounded &&
		css`
			border-radius: 100px;
		`}

	${({ variant, theme }) =>
		variant &&
		css`
			background-color: ${theme.variant[variant].backgroundColor};
			color: ${theme.variant[variant].color};
			&:hover {
				background: ${theme.variant[variant].background};
				transition: all 0.45s ease 0s;
			}
		`} 
	
	${({ loading }) =>
		loading &&
		css`
			color: transparent !important;
			pointer-events: none;
			position: relative;
			&::after {
				content: "";
				animation: ${spin} 1s ease infinite;
				border: 2px solid #000;
				border-radius: 50%;
				border-right-color: transparent !important;
				border-top-color: transparent !important;
				height: 1.2em;
				width: 1.2em;
				position: absolute;
				left: calc(50% - (1.2em / 2));
				top: calc(50% - (1.2em / 2));
			}
		`}
`;

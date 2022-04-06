import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledActionTag = styled.div`
	background: ${({ theme }) => theme.color.red200};
	border-radius: 4px;
	width: fit-content;
	padding: 4px 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.color.red100};
	font-size: ${({ theme }) => theme.font.size[1]};
	line-height: 16px;
	font-weight: ${({ theme }) => theme.font.weight.normal};
	${({ type, theme }) =>
		type &&
		css`
			background-color: ${theme.actionType[type].backgroundColor};
			color: ${theme.actionType[type].color};
		`}
`;

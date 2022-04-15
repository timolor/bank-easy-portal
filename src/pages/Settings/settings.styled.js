import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const SubNavTab = styled.div`
	background: ${({ theme }) => theme.color.black200};
	padding: 0 20rem;
	display: flex;
`;

export const TabTitle = styled.div`
	color: ${({ theme }) => theme.color.gray300};
	font-size: ${({ theme }) => theme.font.size[3]};
	font-weight: ${({ theme }) => theme.font.weight.normal};
	padding: 1.6rem 4rem;
	border-bottom: none;
	${({ activeTab1, activeTab2 }) =>
		(activeTab1 || activeTab2) &&
		css`
			border-bottom: 3px solid #ffa900;
			font-weight: 500;
		`}
`;

export const PageContainer = styled.div`
	padding-top: 14rem;
`;

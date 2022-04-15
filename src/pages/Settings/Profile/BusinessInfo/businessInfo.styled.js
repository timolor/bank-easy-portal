import styled from "@emotion/styled";

export const BusinessInfoForm = styled.div`
	background: ${(props) => props.theme.color.white};
	border-radius: 15px;
	width: 100%;
	margin-right: 2rem;
	padding: 2rem;
	input {
		margin: 1rem 0;
	}
`;

export const Tips = styled.div`
	background: ${(props) => props.theme.color.white};
	border-radius: 15px;
	padding: 2rem;
	width: fit-content;
	height: fit-content;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;
export const RadioGroup = styled.div`
	background: ${(props) => props.theme.color.gray100};
	border-radius: 5px;
	padding: 10px 20px;
	margin: 1rem 0;
	h1 {
		color: ${(props) => props.theme.color.gray400};
		font-size: ${(props) => props.theme.font.size[2]};
		margin-bottom: 1rem;
	}
`;

export const InfoText = styled.p`
	font-size: ${(props) => props.theme.font.size[2]};
	font-weight: ${(props) => props.theme.font.weight.normal};
	margin-top: 3rem;
	margin-left: 1rem;
`;

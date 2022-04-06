import styled from "@emotion/styled";

export const StyledInputContainer = styled.div`
	position: relative;
	width: 100%;
	min-width: 15rem;
	svg {
		position: absolute;
		right: 18px;
		top: 15px;
		cursor: pointer;
	}
`;

export const StyledInput = styled.input`
	width: 100%;
	border-radius: 5px;
	background: ${({ theme }) => theme.color.gray100};
	color: ${({ theme }) => theme.color.black};
	padding: 13px 45px 13px 24px;
	border: none;
	font-size: ${({ theme }) => theme.font.size[2]};
	font-weight: ${({ theme }) => theme.font.weight.medium};
	&::placeholder {
		color: ${({ theme }) => theme.color.gray300};
	}
	&:focus {
		outline: none;
		border: none;
	}
`;

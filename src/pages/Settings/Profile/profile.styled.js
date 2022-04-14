import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
	background: ${(props) => props.theme.color.black300};
`;

export const Banner = styled.div`
	display: flex;
	padding: 20rem 0;
`;

export const Left = styled.div`
	margin-right: 6rem;
`;

export const Right = styled.div``;

export const Heading1 = styled.div`
	color: ${(props) => props.theme.color.white};
	font-size: ${(props) => props.theme.font.size[7]};
	font-weight: ${(props) => props.theme.font.weight.medium};
	text-transform: uppercase;
	margin-bottom: 3rem;
	padding-right: 10rem;
`;

export const Heading2 = styled.div`
	color: ${(props) => props.theme.color.white};
	font-size: ${(props) => props.theme.font.size[19]};
	font-weight: ${(props) => props.theme.font.weight.black};
	margin-bottom: 3rem;
	line-height: 60px;
	padding-right: 20rem;
`;

export const KYCStatus = styled.div`
	background: ${(props) => props.theme.color.yellow100};
	padding: 1.5rem 3rem;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const UpdateText = styled.p`
	font-size: ${(props) => props.theme.font.size[2]};
	font-weight: ${(props) => props.theme.font.weight.normal};
	color: ${(props) => props.theme.color.yellow300};
	margin-right: 3rem;
`;

export const KYCStatusText = styled.p`
	font-size: ${(props) => props.theme.font.size[4]};
	color: ${(props) => props.theme.color.white};
	font-weight: ${(props) => props.theme.font.weight.bold};
	margin-top: 0.3rem;
`;

export const KYCStatusTop = styled.p`
	font-size: ${(props) => props.theme.font.size[2]};
	color: ${(props) => props.theme.color.white};
	font-weight: ${(props) => props.theme.font.weight.normal};
`;
export const FormContainer = styled.div`
	padding: 3rem 2rem;
	width: 50rem;
	min-width: 40rem;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	background: ${(props) => props.theme.color.white};
	h1 {
		font-weight: 700;
		font-size: ${(props) => props.theme.font.size[7]};
		line-height: 30px;
		text-transform: uppercase;
		color: ${(props) => props.theme.color.black};
	}
	form {
		margin-top: 2rem;
	}
	input {
		margin-bottom: 1rem;
	}
`;

export const EditText = styled.p`
	font-size: ${(props) => props.theme.font.size[2]};
	font-weight: ${(props) => props.theme.font.weight.bold};
	color: ${(props) => props.theme.color.primary};
	margin-right: 3rem;
`;

export const AccountBalance = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${(props) => props.theme.color.green200};
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	padding: 1.5rem 3rem;
	color: ${(props) => props.theme.color.black};
`;

export const IconCircle = styled.div`
	background: ${(props) => props.theme.color.green500};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	height: 5rem;
	width: 5rem;
`;

export const AccountBalanceTop = styled.p`
	font-size: ${(props) => props.theme.font.size[2]};
	color: ${(props) => props.theme.color.black};
	font-weight: ${(props) => props.theme.font.weight.normal};
`;

export const AccountBalanceNum = styled.p`
	font-size: ${(props) => props.theme.font.size[7]};
	color: ${(props) => props.theme.color.black};
	font-weight: ${(props) => props.theme.font.weight.bold};
	margin-top: 0.3rem;
`;

export const ViewDetails = styled.p`
	font-size: ${(props) => props.theme.font.size[2]};
	font-weight: ${(props) => props.theme.font.weight.normal};
	color: ${(props) => props.theme.color.black};
	margin-right: 3rem;
`;

export const ModalTitle = styled.h1`
	font-size: ${(props) => props.theme.font.size[7]};
	color: ${(props) => props.theme.color.black};
	font-weight: ${(props) => props.theme.font.weight.bold};
	text-transform: uppercase;
	margin-bottom: 2rem;
`;

import styled from "@emotion/styled";
import Box from "ui-box";

export const LoginPageContainer = styled.div`
	overflow: hidden;
	width: 100%;
`;

export const Navbar = styled(Box)`
	padding: 2rem 4rem;
`;

export const InnerContainer = styled(Box)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	align-items: end;
	padding: 8rem 0;
`;

export const LeftContainer = styled(Box)``;

export const RightContainer = styled(Box)``;

export const IllusImageContainer = styled(Box)`
	position: absolute;
	right: 22px;
	top: 0;
	z-index: -1;
`;

export const FormContainer = styled(Box)`
	position: relative;
	// .rectangle {
	// 	position: absolute;
	// 	z-index: -1;
	// 	bottom: 0;
	// }
`;

export const FormCard = styled(Box)`
	background-color: ${(props) => props.theme.color.white};
	border-radius: 15px;
	box-shadow: ${(props) => props.theme.color.shadow.login};
	backdrop-filter: blur(19px);
	padding: 40px 28px;
	width: 50rem;
	min-width: 40rem;

	h1 {
		font-weight: 700;
		font-size: ${(props) => props.theme.font.size[7]};
		line-height: 30px;
		text-transform: uppercase;
		color: ${(props) => props.theme.color.black};
		margin-bottom: 40px;
	}
	.form__sub-text {
		font-weight: 400;
		font-size: ${(props) => props.theme.font.size[3]};
		line-height: 24px;
		color: ${(props) => props.theme.color.black};
		margin-bottom: 40px;
	}
	.form__icon {
		margin-right: 21px;
		margin-top: 1rem;
	}
	.form__forget {
		color: ${(props) => props.theme.color.yellow500};
		font-size: ${(props) => props.theme.font.size[2]};
		font-weight: ${(props) => props.theme.font.weight.bold};
		text-align: right;
		text-decoration: none;
		display: block;
	}
	.form__remember {
		font-size: ${(props) => props.theme.font.size[3]};
		font-weight: ${(props) => props.theme.font.weight.medium};
		margin-left: 2rem;
	}
	.form__bottom-text {
		margin-top: 2rem;
		font-size: ${(props) => props.theme.font.size[3]};
		font-weight: ${(props) => props.theme.font.weight.medium};
	}
	.form__link {
		color: ${(props) => props.theme.color.yellow500};
		text-decoration: none;
	}
`;

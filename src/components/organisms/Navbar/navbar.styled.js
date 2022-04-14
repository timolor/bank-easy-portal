import styled from "@emotion/styled";
import { Menu } from "components/molecules/DropMenu/dropMenu";

export const NavbarMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 0;
	width: 100%;
`;

export const NavbarContainer = styled.div`
	background: ${(props) => props.theme.color.white};
	padding: 2rem 10rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	.link {
		text-decoration: none;
		color: ${(props) => props.theme.color.black};
		font-size: ${(props) => props.theme.font.size[2]};
		font-weight: ${(props) => props.theme.font.weight.normal};
		margin-right: 30px;
		display: flex;
		&:active {
			font-weight: ${(props) => props.theme.font.weight.bold};
		}
	}
	.nav__icon {
		margin-right: 30px;
		cursor: pointer;
	}
`;

export const StyledNavbarMenu = styled(Menu)`
	display: flex;
	flex-direction: column;
`;

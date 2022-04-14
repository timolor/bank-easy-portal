import React from "react";
import { MenuItem } from "components/molecules/DropMenu/dropMenu";
import { StyledNavbarMenu } from "./navbar.styled";
import { Icon } from "components/atoms/icon";

const NavbarMenu = () => {
	return (
		<StyledNavbarMenu
			className="nav__menu"
			label={<Icon icon="notification" className="nav__icon" fill="#000" />}>
			<MenuItem label="New tab" />
			<MenuItem label="New window" />
		</StyledNavbarMenu>
	);
};

export default NavbarMenu;

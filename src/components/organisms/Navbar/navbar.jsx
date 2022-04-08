import React from "react";
import { NavbarContainer } from "./navbar.styled";
import Box from "ui-box";
import Logo from "assets/images/logo.svg";
import { Button } from "components/atoms/button";
import { Icon } from "components/atoms/icon";
import { ModeSwitch } from "components/atoms/modeswitch";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<NavbarContainer>
			<Box display="flex" alignItems="center">
				<Link className="link" to="/">
					<img src={Logo} alt="website_logo" />
				</Link>
				<Link className="link" to="/">
					Manage
				</Link>
				<Link className="link" to="/">
					Transactions
				</Link>
				<Link className="link" to="/">
					Settings
				</Link>
			</Box>
			<Box display="flex" alignItems="center">
				<Box marginRight="3rem" display="flex" alignItems="center">
					<ModeSwitch />
				</Box>
				<Box display="flex" alignItems="center">
					<Link className="link" to="/">
						<Button variant="secondary" icon="dashboard" iconFill="#000">
							Dashboard
						</Button>
					</Link>
					<Icon icon="user" className="nav__icon" fill="#000" />
					<Icon icon="notification" className="nav__icon" fill="#000" />
				</Box>
			</Box>
		</NavbarContainer>
	);
};

export default Navbar;

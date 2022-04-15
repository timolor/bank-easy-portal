import React from "react";
import { NavbarContainer, NavbarMainContainer } from "./navbar.styled";
import Box from "ui-box";
import Logo from "assets/images/logo.svg";
import { Button } from "components/atoms/button";
import { Icon } from "components/atoms/icon";
import { ModeSwitch } from "components/atoms/modeswitch";
import { Link } from "react-router-dom";
import NavbarMenu from "./navbarmenu";

const Navbar = ({ children }) => {
	return (
		<NavbarMainContainer>
			<NavbarContainer>
				<Box display="flex" alignItems="center">
					<Link className="link" to="/">
						<img src={Logo} alt="website_logo" />
					</Link>
					<Link className="link" to="/manage">
						Manage
					</Link>
					<Link className="link" to="/transactions">
						Transactions
					</Link>
					<Link className="link" to="/settings">
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
						<NavbarMenu />
					</Box>
				</Box>
			</NavbarContainer>
			{children}
		</NavbarMainContainer>
	);
};

export default Navbar;

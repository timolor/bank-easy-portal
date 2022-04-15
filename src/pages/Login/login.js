import React from "react";
import {
	LoginPageContainer,
	Navbar,
	InnerContainer,
	LeftContainer,
	RightContainer,
	IllusImageContainer,
	FormContainer,
	FormCard,
} from "./login.styled";
import Logo from "assets/images/logo.svg";
import Persons from "assets/images/loginImage.svg";
import Illustration from "assets/images/illustration01.svg";
import Rectangle from "assets/images/rectangle.svg";
import Box from "ui-box";
import { Input } from "components/atoms/input";
import { Icon } from "components/atoms/icon";
import { Button } from "components/atoms/button";
import { Checkbox } from "components/atoms/checkbox";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<LoginPageContainer>
			<Navbar>
				<img src={Logo} alt="website_logo" />
			</Navbar>
			<InnerContainer>
				<LeftContainer>
					<img src={Persons} alt="persons_on_phone" />
				</LeftContainer>
				<RightContainer>
					<FormContainer>
						{/* <img src={Rectangle} alt="rectangle" className="rectangle" /> */}
						<FormCard>
							<form>
								<h1>Sign In</h1>
								<p className="form__sub-text">Access BankEasy using your login credentials</p>
								<Box display="flex" alignItems="center" marginBottom="14px">
									<Icon icon="message" className="form__icon" fill="#C5C5C5" />
									<Input
										name="email"
										id="email"
										placeholder="Email"
										type="email"
										autoComplete="email"
									/>
								</Box>
								<Box display="flex" alignItems="center" marginBottom="14px">
									<Icon icon="key" className="form__icon" fill="#C5C5C5" />
									<Input
										name="password"
										id="current-password"
										placeholder="Password"
										type="password"
										autoComplete="current-password"
									/>
								</Box>
								<Link to="/" className="form__forget">
									Forget Password?
								</Link>
								<Box marginTop="15px" display="flex" alignItems="center">
									<Checkbox />
									<p className="form__remember">Remember me</p>
								</Box>
								<Box marginTop="20px" alignItems="center">
									<Button fullWidth>Sign in</Button>
								</Box>
								<p className="form__bottom-text">
									Don't have an account?{" "}
									<Link to="/auth/signup" className="form__link">
										Sign Up
									</Link>
								</p>
							</form>
						</FormCard>
					</FormContainer>
					<IllusImageContainer>
						<img src={Illustration} className="right_illus_image" alt="illustration" />
					</IllusImageContainer>
				</RightContainer>
			</InnerContainer>
		</LoginPageContainer>
	);
};

export default Login;

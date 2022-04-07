import {
	LoginPageContainer,
	Navbar,
	InnerContainer,
	LeftContainer,
	RightContainer,
	IllusImageContainer,
	FormContainer,
	FormCard,
} from "pages/Login/login.styled";
import React from "react";
import Logo from "assets/images/logo.svg";
import Persons from "assets/images/signupImage.svg";
import Illustration from "assets/images/illustration01.svg";
import Rectangle from "assets/images/rectangle.svg";
import Box from "ui-box";
import { Input } from "components/atoms/input";
import { Icon } from "components/atoms/icon";
import { Button } from "components/atoms/button";
import { Checkbox } from "components/atoms/checkbox";
import { Link } from "react-router-dom";

const Signup = () => {
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
								<h1>Sign Up</h1>
								<p className="form__sub-text">
									Create new BankEasy account to gain full access
								</p>
								<Box display="flex" alignItems="center" marginBottom="14px">
									<Icon icon="person" className="form__icon" fill="#C5C5C5" />
									<Input placeholder="First Name" type="text" />
								</Box>
								<Box display="flex" alignItems="center" marginBottom="14px">
									<Icon icon="person" className="form__icon" fill="#C5C5C5" />
									<Input placeholder="Last Name" type="text" />
								</Box>
								<Box display="flex" alignItems="center" marginBottom="14px">
									<Icon icon="message" className="form__icon" fill="#C5C5C5" />
									<Input placeholder="Email" type="email" />
								</Box>
								<Box display="flex" alignItems="center" marginBottom="14px">
									<Icon icon="key" className="form__icon" fill="#C5C5C5" />
									<Input placeholder="Password" type="password" />
								</Box>
								<Box display="flex" alignItems="center" marginBottom="14px">
									<Icon icon="key" className="form__icon" fill="#C5C5C5" />
									<Input placeholder="Confirm Password" type="password" />
								</Box>
								<Link to="/" className="form__forget">
									Forget Password?
								</Link>
								<Box marginTop="15px" display="flex" alignItems="center">
									<Checkbox />
									<p className="form__remember">
										I agree to{" "}
										<Link to="/" className="form__link">
											terms of use
										</Link>
									</p>
								</Box>
								<Box marginTop="20px" alignItems="center">
									<Button fullWidth>Sign in</Button>
								</Box>
								<p className="form__bottom-text">
									Don't have an account?{" "}
									<Link to="/" className="form__link">
										Sign In
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

export default Signup;

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
} from "pages/Login/login.styled";
import Logo from "assets/images/logo.svg";
import Persons from "assets/images/verifyImage.svg";
import Illustration from "assets/images/illustration01.svg";
import Rectangle from "assets/images/rectangle.svg";
import Box from "ui-box";
import { Input } from "components/atoms/input";
import { Icon } from "components/atoms/icon";
import { Button } from "components/atoms/button";
import { Link } from "react-router-dom";

const VerifyCode = () => {
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
								<h1>Verify code</h1>
								<p className="form__sub-text">
									A verification code has been sent to the email address in your BankEasy
									account
								</p>
								<Box display="flex" alignItems="center" marginBottom="14px">
									<Icon icon="key" className="form__icon" fill="#C5C5C5" />
									<Input placeholder="Enter verification code" type="password" />
								</Box>
								<Box marginTop="20px" alignItems="center">
									<Button fullWidth>Continue</Button>
								</Box>
								<p className="form__bottom-text">
									<Link to="/" className="form__link">
										Skip
									</Link>
									I'll confirm later
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

export default VerifyCode;

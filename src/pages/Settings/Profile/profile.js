import { Icon } from "components/atoms/icon";
import React, { useState } from "react";
import { PagePadding } from "util/cssScaffolds/pagePadding";
import {
	ProfileContainer,
	Banner,
	Left,
	Right,
	Heading1,
	Heading2,
	KYCStatus,
	UpdateText,
	KYCStatusTop,
	KYCStatusText,
	FormContainer,
	EditText,
	AccountBalance,
	IconCircle,
	AccountBalanceTop,
	AccountBalanceNum,
	ViewDetails,
} from "./profile.styled";
import Box from "ui-box";
import { Input } from "components/atoms/input";
import { EditProfileModal } from "./editProfileModal";

export const Profile = () => {
	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => {
		setOpenModal(true);
	};
	return (
		<ProfileContainer>
			<Banner>
				<PagePadding>
					<Box display="flex" alignItems="end">
						<Left>
							<Heading1>Welcome, tweet</Heading1>
							<Heading2>Edit your profile to update personal details.</Heading2>

							<KYCStatus>
								<Box display="flex" alignItems="center">
									<Icon icon="shield" viewBox="0 0 36 44" fill="#FFCC68" size={45} />
									<Box display="flex" flexDirection="column" marginLeft="2rem">
										<KYCStatusTop>KYC Status</KYCStatusTop>
										<KYCStatusText>Incompete Status</KYCStatusText>
									</Box>
								</Box>
								<Box display="flex" alignItems="center" cursor="pointer">
									<UpdateText>Update info</UpdateText>
									<Icon icon="rightArrow" fill="#FFCC68" viewBox="0 0 16 8" />
								</Box>
							</KYCStatus>
						</Left>
						<Right>
							<Box>
								<FormContainer>
									<Box display="flex" flexDirection="column">
										<Box display="flex">
											<h1>MY PROFILE</h1>
											<Box
												display="flex"
												marginLeft="2rem"
												alignItems="center"
												cursor="pointer"
												onClick={handleOpenModal}>
												<EditText>Edit Profile</EditText>
												<Icon icon="rightArrow" fill="#FFA900" viewBox="0 0 16 8" />
											</Box>
										</Box>
										<form>
											<Input placeholder="First Name" type="text" />
											<Input placeholder="Last Name" type="text" />
											<Input
												name="email"
												id="email"
												placeholder="Email"
												type="email"
												autoComplete="email"
											/>
										</form>
									</Box>
								</FormContainer>
								<AccountBalance>
									<Box display="flex" alignItems="center">
										<IconCircle>
											<Icon icon="house" viewBox="0 0 25 27" fill="#6FCF97" size={25} />
										</IconCircle>
										<Box display="flex" flexDirection="column" marginLeft="2rem">
											<AccountBalanceTop>Account balance summary</AccountBalanceTop>
											<AccountBalanceNum>NGN 250,690.93</AccountBalanceNum>
										</Box>
									</Box>
									<Box display="flex" alignItems="center" cursor="pointer">
										<ViewDetails>View Details</ViewDetails>
										<Icon icon="rightArrow" fill="#000" viewBox="0 0 16 8" />
									</Box>
								</AccountBalance>
							</Box>
						</Right>
					</Box>
				</PagePadding>
			</Banner>
			<EditProfileModal openModal={openModal} closeModal={() => setOpenModal(false)} />
		</ProfileContainer>
	);
};

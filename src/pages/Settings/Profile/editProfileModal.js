import { Modal } from "components/molecules/Modal";
import React from "react";
import { ModalTitle } from "./profile.styled";
import Box from "ui-box";
import { Input } from "components/atoms/input";
import { Button } from "components/atoms/button";

export const EditProfileModal = ({ openModal, closeModal }) => {
	return (
		<Modal openModal={openModal} closeModal={closeModal} noCancel>
			<ModalTitle>Edit Profile</ModalTitle>
			<form>
				<Box marginY="1rem">
					{" "}
					<Input placeholder="First Name" type="text" />
				</Box>
				<Box marginY="1rem">
					<Input placeholder="Last Name" type="text" />
				</Box>
				<Box marginY="1rem">
					<Input name="email" id="email" placeholder="Email" type="email" autoComplete="email" />
				</Box>
				<Box marginTop="4rem">
					<Button fullWidth>Update Profile</Button>
				</Box>
			</form>
		</Modal>
	);
};

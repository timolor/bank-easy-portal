import React from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";
import "./style.css";
import { Icon } from "components/atoms/icon";

const StyledModal = styled(Modal)`
	background: ${({ theme }) => theme.color.white};
	box-shadow: ${({ theme }) => theme.color.shadow.modal};
	border-radius: 15px;
	max-width: 550px;
	max-height: 90vh;
	width: 90%;
	position: relative;
	padding: 20px;
	outline: none;
`;

const Cancel = styled.div`
	position: absolute;
	top: 18px;
	right: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px soild black;
	width: fix-content;
	background: ${({ theme }) => theme.color.white};
	border: 1px solid #ebebeb;
	padding: 8.3px;
	border-radius: 50%;
	cursor: pointer;
`;

const ModalComponent = ({ children, openModal, noCancel, closeModal, afterOpen }) => {
	return (
		<StyledModal
			isOpen={openModal}
			onAfterOpen={afterOpen}
			onRequestClose={closeModal}
			overlayClassName="modal-overlay"
			appElement={document.querySelector("#root")}>
			{!noCancel && (
				<Cancel onClick={closeModal}>
					<Icon icon="cancel" size={14} viewBox="0 0 14 14" fill="#C5C5C5" />
				</Cancel>
			)}
			<div>{children}</div>
		</StyledModal>
	);
};
export default ModalComponent;

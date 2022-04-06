import React from "react";
import { StyledButton } from "./button.styled";
const Button = ({ children, loading, variant, onClick, type, disabled, ...props }) => {
	return (
		<StyledButton
			loading={loading}
			variant={variant}
			onClick={onClick}
			disabled={disabled}
			type={type}
			{...props}>
			{children}
		</StyledButton>
	);
};

export default Button;

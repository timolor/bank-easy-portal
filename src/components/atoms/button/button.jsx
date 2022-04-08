import React from "react";
import { StyledButton } from "./button.styled";
import Icon from "../icon/icon";

const Button = ({ children, icon, iconFill, loading, variant, onClick, type, disabled, ...props }) => {
	return (
		<StyledButton
			loading={loading ? 1 : 0}
			variant={variant}
			onClick={onClick}
			disabled={disabled}
			type={type}
			{...props}>
			{icon && <Icon icon={icon} fill={iconFill} size={20} />}
			{children}
		</StyledButton>
	);
};

export default Button;

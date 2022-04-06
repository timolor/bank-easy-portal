import React from "react";
import { StyledButton } from "./button.styled";
const Button = (props) => {
	const { children, loading, variant, onClick, type } = props;
	return (
		<StyledButton loading={loading} variant={variant} onClick={onClick} type={type} {...props}>
			{children}
		</StyledButton>
	);
};

export default Button;

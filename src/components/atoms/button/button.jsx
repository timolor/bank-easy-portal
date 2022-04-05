import React from "react";
import { StyledButton } from "./button.styled";
const Button = (props) => {
	const { children, loading, variant, onClick, type } = props;
	return <StyledButton>{children}</StyledButton>;
};

export default Button;

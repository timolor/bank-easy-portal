import React, { useState } from "react";
import { Icon } from "../icon";
import { StyledInputContainer, StyledInput } from "./input.styled";

const Input = ({ placeholder, type, onChange }) => {
	const [show, setShow] = useState(false);
	const toggleShow = () => setShow((v) => !v);
	return (
		<StyledInputContainer>
			<StyledInput
				placeholder={placeholder}
				type={show ? "password" : "text" || type}
				onChange={onChange}
			/>
			{type === "password" && (
				<Icon
					icon="show"
					onClick={toggleShow}
					fill="#C5C5C5"
					viewBox="0 0 22 15"
					className="password_icon"
				/>
			)}
		</StyledInputContainer>
	);
};

export default Input;

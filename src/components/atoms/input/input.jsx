import React, { useState, memo } from "react";
import { Icon } from "../icon";
import { StyledInputContainer, StyledInput } from "./input.styled";

const Input = ({ placeholder, type, onChange, value, autocomplete, ...props }) => {
	const [show, setShow] = useState(false);
	const toggleShow = () => setShow((v) => !v);
	return (
		<StyledInputContainer>
			{type === "password" ? (
				<>
					<StyledInput
						placeholder={placeholder}
						type={!show ? "password" : "text"}
						onChange={onChange}
						value={value}
						autoComplete={autocomplete}
						{...props}
					/>{" "}
					<Icon
						icon="show"
						onClick={toggleShow}
						fill="#C5C5C5"
						viewBox="0 0 22 15"
						size={20}
						className="password_icon"
					/>
				</>
			) : (
				<StyledInput
					placeholder={placeholder}
					type={type}
					onChange={onChange}
					value={value}
					{...props}
				/>
			)}
		</StyledInputContainer>
	);
};

export default memo(Input);

import React from "react";
import { StyledActionTag } from "./actiontag.styled";

const ActionTag = ({ type, text }) => {
	return <StyledActionTag type={type}>{text}</StyledActionTag>;
};

export default ActionTag;

import React from "react";
import styled from "@emotion/styled";

const PagePaddingContainer = styled.div`
	padding: 0 20rem;
`;

export const PagePadding = ({ children }) => {
	return <PagePaddingContainer>{children}</PagePaddingContainer>;
};

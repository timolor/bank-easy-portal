import styled from "styled-components";

export const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
	cursor: pointer;
`;

export const Icon = styled.svg`
	position: absolute;
	top: 0;
	fill: none;
	stroke: black;
	stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

export const StyledCheckbox = styled.div`
	position: relative;
	top: 3px;
	display: inline-block;
	width: 18px;
	height: 18px;
	border-radius: 3px;
	transition: all 0.5s;
	background: ${(props) => (props.checked ? "#ffa900" : "white")};
	border: 1px solid #7c7c7c;

	${Icon} {
		visibility: ${(props) => (props.checked ? "visible" : "hidden")};
		transition: all 0.1s;
	}
`;

import React from "react";
import PropTypes from "prop-types";
import { iconPaths } from "assets/allIcons/allIcons";

const Icon = ({ size, fill, icon, className, viewBox, style, ...props }) => {
	return (
		<svg
			className={className}
			style={style}
			viewBox={viewBox}
			width={`${size}px`}
			height={`${size}px`}
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path fill={fill} d={iconPaths[icon]} />
		</svg>
	);
};

Icon.propTypes = {
	size: PropTypes.number,
	fill: PropTypes.string,
	icon: PropTypes.string,
	className: PropTypes.string,
	viewBox: PropTypes.string,
	style: PropTypes.object,
};

Icon.defaultProps = {
	size: 24,
	fill: "#7E5FF2",
	viewBox: "0 0 24 24",
	className: "",
	style: {},
};

export default Icon;

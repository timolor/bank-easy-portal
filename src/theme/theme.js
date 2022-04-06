import { css } from "@emotion/react";

const color = {
	black: "#000000",
	white: "#FFFFFF",
	primary: "#FFA900",
	green100: "#00DA5C",
	green200: "#6FCF97",
	green300: "rgba(0, 218, 92, 0.05)",
	green400: "rgba(33, 150, 83, 0.1)",
	gray100: "#FAFAFA",
	gray200: "#EBEBEB",
	gray300: "#C5C5C5",
	red100: "#EB5757",
	red200: "rgba(235, 87, 87, 0.1)",
	blue100: "#2F80ED",
	blue200: "rgba(47, 128, 237, 0.1)",
	yellow100: "rgba(252, 175, 23, 0.1)",
	yellow200: "rgba(255, 169, 0, 0.5)",
	yellow300: "#FFCC68",
	yellow400: "rgba(252, 175, 23, 0.3)",
	card: {
		shadow: "0px 0px 3px rgba(0, 0, 0, 0.15)",
	},
};

const font = {
	size: {
		1: "12px",
		2: "14px",
		3: "16px",
		4: "18px",
		5: "20px",
		6: "22px",
		7: "24px",
		8: "26px",
		9: "28px",
		10: "30px",
		11: "32px",
		12: "34px",
		13: "36px",
		14: "38px",
		15: "40px",
		16: "42px",
		17: "44px",
		18: "46px",
		19: "48px",
		20: "50px",
	},
	weight: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	},
};

const spacing = {
	1: "12px",
	2: "14px",
	3: "16px",
	4: "18px",
	5: "20px",
	6: "22px",
	7: "24px",
	8: "26px",
	9: "28px",
	10: "30px",
	11: "32px",
};

const breakpoints = {
	xs: "650px",
	sm: "960px",
	md: "1280px",
	lg: "1400px",
	xl: "1920px",
};

//button variants
const variant = {
	primary: {
		backgroundColor: color.primary,
		color: color.black,
		background: color.yellow300,
	},
	secondary: {
		backgroundColor: color.gray200,
		color: color.black,
		background: color.gray300,
	},
};

const mq = Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${breakpoints[label]}) {
			${css(...args)}
		}
	`;
	return acc;
}, {});

export const theme = { color, font, spacing, mq, variant };

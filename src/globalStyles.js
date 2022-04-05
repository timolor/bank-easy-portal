import CeraProBlack from "./assets/fonts/CeraProBlack.otf";
import CeraProBold from "./assets/fonts/CeraProBold.otf";
import CeraProLight from "./assets/fonts/CeraProLight.otf";
import CeraProMedium from "./assets/fonts/CeraProMedium.otf";
import CeratProRegular from "./assets/fonts/CeraProRegular.otf";
import CeraProThin from "./assets/fonts/CeraProThin.otf";
import { css } from "@emotion/react";

const globalStyle = css`
	@font-face {
		font-family: "Cera Pro";
		font-weight: 900;
		src: url(${CeraProBlack}) format("opentype");
		font-display: swap;
	}

	@font-face {
		font-family: "Cera Pro";
		font-weight: 700;
		src: url(${CeraProBold}) format("opentype");
		font-display: swap;
	}

	@font-face {
		font-family: "Cera Pro";
		font-weight: 300;
		src: url(${CeraProLight}) format("opentype");
		font-display: swap;
	}

	@font-face {
		font-family: "Cera Pro";
		font-weight: 500;
		src: url(${CeraProMedium}) format("opentype");
		font-display: swap;
	}

	@font-face {
		font-family: "Cera Pro";
		font-weight: 400;
		src: url(${CeratProRegular}) format("opentype");
		font-display: swap;
	}

	@font-face {
		font-family: "Cera Pro";
		font-weight: 100;
		src: url(${CeraProThin}) format("opentype");
		font-display: swap;
	}

	html,
	body,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	a,
	p,
	span,
	em,
	small,
	strong,
	sub,
	sup,
	mark,
	del,
	ins,
	strike,
	abbr,
	dfn,
	blockquote,
	q,
	cite,
	code,
	pre,
	ol,
	ul,
	li,
	dl,
	dt,
	dd,
	div,
	section,
	article,
	main,
	aside,
	nav,
	header,
	hgroup,
	footer,
	img,
	figure,
	figcaption,
	address,
	time,
	audio,
	video,
	canvas,
	iframe,
	details,
	summary,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td {
		margin: 0;
		padding: 0;
		border: 0;
	}

	/* Typography
 * *********************************** */

	html {
		font-size: 62.5%;
		scroll-behavior: smooth;
		-webkit-scroll-behavior: smooth;
	}

	body {
		font-family: "Cera Pro", sans-serif;
		font-size: 1.6rem;
		line-height: 26px;
		scroll-behavior: smooth;
		-webkit-scroll-behavior: smooth;
		color: #7c7c7c;
	}

	* {
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
	}

	a,
	a:visited {
		// color: inherit;
	}

	/* Layout
 * *********************************** */

	article,
	aside,
	footer,
	header,
	nav,
	section,
	main {
		display: block;
	}

	* {
		box-sizing: border-box;
	}

	*:before,
	*:after {
		box-sizing: inherit;
	}

	/* Elements
 * *********************************** */

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	ul {
		list-style: none;
	}

	img,
	video {
		max-width: 100%;
	}

	img {
		border-style: none;
	}

	blockquote,
	q {
		quotes: none;
	}

	blockquote:after,
	blockquote:before,
	q:after,
	q:before {
		content: "";
		content: none;
	}

	/* Attributes & states
 * *********************************** */

	[hidden] {
		display: none !important;
	}

	[disabled] {
		cursor: not-allowed;
	}

	:focus:not(:focus-visible) {
		outline: none;
	}

	/* Utility classes
 * *********************************** */

	.sr-only {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		left: -9999px;
		top: -9999px;
	}
`;

export default globalStyle;

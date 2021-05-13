import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography.js";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		/*font-size: 20px;*/
		font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
	}

	html, body {
		min-height: 100%;
	   font-family: ${primaryFont}
	}

	body {
		font-size: 1rem;
		height: 100%;
	}
`;

export default GlobalStyle;

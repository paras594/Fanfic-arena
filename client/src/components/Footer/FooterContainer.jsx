import React from "react";
import LogoContainer from "../Logo/LogoContainer.jsx";
import { Footer, FooterText } from "./FooterStyles.js";

function FooterContainer() {
	return (
		<Footer>
			<LogoContainer fontSize="0.9rem" />
			<FooterText>Designed & Developed By Paras ©2020</FooterText>
		</Footer>
	);
}

export default FooterContainer;

import React from "react";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { OAuthBtns, OAuthBtn } from "./OAuthButtonsStyles.js";

function OAuthButtonsContainer() {
	return (
		<OAuthBtns>
			<OAuthBtn>
				<FaFacebookF />
			</OAuthBtn>
			<OAuthBtn>
				<FaGoogle />
			</OAuthBtn>
			<OAuthBtn>
				<FaTwitter />
			</OAuthBtn>
		</OAuthBtns>
	);
}

export default OAuthButtonsContainer;

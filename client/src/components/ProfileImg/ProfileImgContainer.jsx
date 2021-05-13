import React from "react";
import { Div } from "./ProfileImgStyles.js";

function ProfileImgContainer({ src }) {
	return (
		<Div>
			<img src={src} alt="profile pic" />
		</Div>
	);
}

export default ProfileImgContainer;

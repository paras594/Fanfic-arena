import React from "react";
import { useHistory } from "react-router-dom";
import ProfileHeaderContainer from "./ProfileHeaderContainer.jsx";

function ProfileHeader({ userData }) {
	const history = useHistory();

	const goToFollowers = () => {
		history.push(`/profile/${userData.id}/connections?type=followers`);
	};

	const goToFollowing = () => {
		history.push(`/profile/${userData.id}/connections?type=following`);
	};

	return (
		<ProfileHeaderContainer
			userData={userData}
			goToFollowers={goToFollowers}
			goToFollowing={goToFollowing}
		/>
	);
}

export default ProfileHeader;

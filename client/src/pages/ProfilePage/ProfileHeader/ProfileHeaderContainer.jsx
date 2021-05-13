import React from "react";
import { ProfileName, ProfileUsername } from "../../../styles/Profile";
import { Header, Bg, ProfileStats, Stat, StatTitle, StatCount } from "./ProfileHeaderStyles.js";
import ProfileImgContainer from "../../../components/ProfileImg/ProfileImgContainer.jsx";

function ProfileHeaderContainer({ userData, goToFollowers, goToFollowing }) {
	return (
		<Header>
			<Bg />
			<ProfileImgContainer src={userData.img} alt="profile pic" />
			<ProfileName light>{userData.fullname}</ProfileName>
			<ProfileUsername light>{userData.username}</ProfileUsername>
			<ProfileStats>
				<Stat style={{ cursor: "pointer" }} onClick={goToFollowers}>
					<StatTitle>Followers</StatTitle>
					<StatCount>{userData.followers}</StatCount>
				</Stat>
				<Stat>
					<StatTitle>Fictions</StatTitle>
					<StatCount>{userData.fictions}</StatCount>
				</Stat>
				<Stat style={{ cursor: "pointer" }} onClick={goToFollowing}>
					<StatTitle>Following</StatTitle>
					<StatCount>{userData.following}</StatCount>
				</Stat>
			</ProfileStats>
		</Header>
	);
}

export default ProfileHeaderContainer;

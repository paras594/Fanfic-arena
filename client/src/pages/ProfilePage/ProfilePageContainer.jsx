import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar.js";
import ProfileHeader from "./ProfileHeader/ProfileHeader.js";
import Button from "../../styles/Button.js";
import Wrapper from "../../styles/Wrapper";
import FooterContainer from "../../components/Footer/FooterContainer.jsx";
import Center from "../../styles/Center.js";
import { Tabs, Tab } from "../../styles/Tabs.js";
import { Div } from "./ProfilePageStyles.js";
import FictionPane from "./FictionPane/FictionPane.js";

function ProfilePageContainer({
	userData,
	userFictions,
	likedFictions,
	savedFictions,
	isFollowing,
	handleEditProfile,
	handleFollowClick,
	handleUnfollowClick,
}) {
	const { user } = useSelector((state) => state.auth);
	const [activeTab, setActiveTab] = useState(1);

	return (
		<div>
			<Navbar />
			<ProfileHeader userData={userData} />
			<Center>
				{user.id === userData.id ? (
					<Button bold px="1.8rem" onClick={handleEditProfile}>
						Edit Profile
					</Button>
				) : isFollowing ? (
					<Button bold px="1.8rem" onClick={handleUnfollowClick}>
						Unfollow
					</Button>
				) : (
					<Button bold px="1.8rem" onClick={handleFollowClick}>
						Follow
					</Button>
				)}
			</Center>
			<Div>
				<Tabs>
					<Tab onClick={() => setActiveTab(1)}>My Fictions</Tab>
					<Tab onClick={() => setActiveTab(2)}>Saved</Tab>
					<Tab onClick={() => setActiveTab(4)}>Liked</Tab>
				</Tabs>
			</Div>
			<Wrapper>
				{activeTab === 1 && <FictionPane data={userFictions} />}
				{activeTab === 2 && <FictionPane data={savedFictions} />}
				{activeTab === 4 && <FictionPane data={likedFictions} />}
			</Wrapper>
			<FooterContainer />
		</div>
	);
}

export default ProfilePageContainer;

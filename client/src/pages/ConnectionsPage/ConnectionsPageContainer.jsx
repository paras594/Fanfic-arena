import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.js";
import FooterContainer from "../../components/Footer/FooterContainer.jsx";
import Wrapper from "../../styles/Wrapper.js";
import ProfileImgContainer from "../../components/ProfileImg/ProfileImgContainer.jsx";
import { ProfileName, ProfileUsername } from "../../styles/Profile.js";
import Center from "../../styles/Center.js";
import { Tabs, Tab } from "../../styles/Tabs.js";
import {
	Div,
	Userinfo,
	Connections,
	Connection,
	UserImg,
	Name,
	Username,
} from "./ConnectionsPageStyles.js";

function ConnectionsPageContainer({
	userData,
	followers,
	following,
	activeTab,
	handleFollowersClick,
	handleFollowingClick,
}) {
	return (
		<Div>
			<Navbar />
			<Wrapper>
				<Userinfo>
					<ProfileImgContainer
						src={userData.userImage}
						alt="profile pic"
					/>
					<ProfileName>{userData.fullname}</ProfileName>
					<ProfileUsername>{userData.username}</ProfileUsername>
				</Userinfo>
				<Center my="2.5rem">
					<Tabs>
						<Tab onClick={handleFollowersClick}>
							Followers ({followers.length})
						</Tab>
						<Tab onClick={handleFollowingClick}>
							Following ({following.length})
						</Tab>
					</Tabs>
				</Center>

				<Connections>
					{activeTab === 1 &&
						followers.map((follower) => (
							<Connection key={follower._id}>
								<UserImg>
									<img src={follower.userImage} alt="profile pic" />
								</UserImg>
								<Name>
									<Link to={`/profile/${follower._id}`}>
										{follower.fullname}
									</Link>
								</Name>
								<Username>
									<Link to={`/profile/${follower._id}`}>
										{follower.username}
									</Link>
								</Username>
								{/* <Name>{follower.fullname}</Name> */}
								{/* <Username>{follower.username}</Username> */}
								{/* <Button ml="auto">Unfollow</Button> */}
							</Connection>
						))}

					{activeTab === 2 &&
						following.map((follower) => (
							<Connection key={follower._id}>
								<UserImg>
									<img src={follower.userImage} alt="profile pic" />
								</UserImg>
								<Name>
									<Link to={`/profile/${follower._id}`}>
										{follower.fullname}
									</Link>
								</Name>
								<Username>
									<Link to={`/profile/${follower._id}`}>
										{follower.username}
									</Link>
								</Username>
								{/* <Button ml="auto">Unfollow</Button> */}
							</Connection>
						))}
				</Connections>
			</Wrapper>
			<FooterContainer />
		</Div>
	);
}

export default ConnectionsPageContainer;

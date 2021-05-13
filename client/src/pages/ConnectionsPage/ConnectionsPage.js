import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "../../utils/customHooks.js";
import ConnectionsPageContainer from "./ConnectionsPageContainer.jsx";

function ConnectionsPage() {
	const [userData, setUserData] = useState({});
	const [userFollowers, setUserFollowers] = useState([]);
	const [userFollowing, setUserFollowing] = useState([]);
	const tabs = {
		followers: 1,
		following: 2,
	};
	const { userId } = useParams();
	const query = useQuery();
	const type = query.get("type");
	const [activeTab, setActiveTab] = useState(tabs.followers);

	useEffect(() => {
		axios
			.get(`/api/users/${userId}/connections`)
			.then((res) => {
				const { user } = res.data;
				const { followers, following, ...userDetails } = user;
				setUserData(userDetails);
				setUserFollowers(followers);
				setUserFollowing(following);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [userId]);

	useEffect(() => {
		setActiveTab(tabs[type]);
	}, [type]);

	const handleFollowersClick = () => {
		setActiveTab(tabs.followers);
		console.log("followers click");
	};

	const handleFollowingClick = () => {
		setActiveTab(tabs.following);
		console.log("following click");
	};

	return (
		<ConnectionsPageContainer
			userData={userData}
			followers={userFollowers}
			following={userFollowing}
			activeTab={activeTab}
			handleFollowersClick={handleFollowersClick}
			handleFollowingClick={handleFollowingClick}
		/>
	);
}

export default ConnectionsPage;

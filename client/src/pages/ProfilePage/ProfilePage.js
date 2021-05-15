import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import ProfilePageContainer from "./ProfilePageContainer.jsx";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function ProfilePage() {
	const { isAuthenticated } = useSelector((state) => state.auth);
	const [userData, setUserData] = useState({
		id: null,
		username: "",
		fullname: "",
		img: null,
		followers: 0,
		following: 0,
		fictions: 0,
	});
	const [userFictions, setUserFictions] = useState([]);
	const [likedFictions, setLikedFictions] = useState([]);
	const [savedFictions, setSavedFictions] = useState([]);
	const [isFollowing, setIsFollowing] = useState(false);
	const { userId } = useParams();
	const history = useHistory();

	useEffect(() => {
		console.log(userId);
		axios
			.get(`/api/users/${userId}`)
			.then((res) => {
				console.log(res.data);
				const { user } = res.data;

				setUserData({
					id: user._id,
					username: `@${user.username}`,
					fullname: user.fullname,
					img: user.userImage,
					followers: user.followers.length,
					following: user.following.length,
					fictions: user.fictions.length,
				});

				setUserFictions(user.fictions);
				setLikedFictions(user.likedFictions);
				setSavedFictions(user.savedFictions);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [userId]);

	const handleFollowClick = (e) => {
		if (!isAuthenticated) {
			return toast.info("Login Required !");
		}
		axios
			.post(`/api/users/${userId}/follow`)
			.then((res) => {
				console.log(res.data.message);
				setIsFollowing(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleUnfollowClick = (e) => {
		if (!isAuthenticated) {
			return toast.info("Login Required !");
		}
		axios
			.post(`/api/users/${userId}/unfollow`)
			.then((res) => {
				console.log(res.data.message);
				setIsFollowing(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleEditProfile = () => {
		if (!isAuthenticated) {
			return toast.info("Login Required !");
		}
		console.log("handling edit profile click");
		history.push(`/profile/${userId}/edit`);
	};

	return (
		<ProfilePageContainer
			userData={userData}
			userFictions={userFictions}
			likedFictions={likedFictions}
			savedFictions={savedFictions}
			isFollowing={isFollowing}
			handleFollowClick={handleFollowClick}
			handleUnfollowClick={handleUnfollowClick}
			handleEditProfile={handleEditProfile}
		/>
	);
}

export default ProfilePage;

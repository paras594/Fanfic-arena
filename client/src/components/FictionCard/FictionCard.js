import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import FictionCardContainer from "./FictionCardContainer.jsx";

function FictionCard(props) {
	const { user, isAuthenticated } = useSelector((state) => state.auth);
	const [likes, setLikes] = useState(props.data.likesCount);
	const [isLiked, setIsLiked] = useState(false);

	useEffect(() => {
		if (isAuthenticated) {
			const liked = props.data.likes.find((id) => id === user.id);
			// console.log(props.data.likes)
			if (liked) {
				setIsLiked(true);
			} else {
				setIsLiked(false);
			}
		}
	}, [isAuthenticated, props.data.likes, user.id]);

	const handleLikeClick = (ficId) => () => {
		if (!isAuthenticated) {
			return toast.info("Login Required !");
		}
		if (isLiked) {
			axios.patch(`/api/fictions/${ficId}/unlike`).then((res) => {
				setIsLiked(false);
				setLikes(likes - 1);
			});
		} else {
			axios.patch(`/api/fictions/${ficId}/like`).then((res) => {
				setIsLiked(true);
				setLikes(likes + 1);
			});
		}
	};

	return (
		<FictionCardContainer
			{...props}
			likes={likes}
			isLiked={isLiked}
			handleLikeClick={handleLikeClick}
		/>
	);
}

export default FictionCard;

import React, { useState } from "react";
import produce from "immer";
import axios from "axios";
import FanficCommentsContainer from "./FanficCommentsContainer.jsx";

function FanficComments({ comments, fictionId }) {
	const [fictionComments, setFictionsComments] = useState(comments);
	const [comment, setComment] = useState("");

	const handleCommentChange = (e) => {
		setComment(e.target.value);
	};

	const handleCommentSubmit = (e) => {
		e.preventDefault();
		console.log("form submitted");

		axios
			.post(`/api/fictions/${fictionId}/comment`, { comment })
			.then((res) => {
				const newComment = res.data.comment;
				console.log("new comment:", newComment);
				setFictionsComments(
					produce(fictionComments, (draft) => {
						draft.push(newComment);
					})
				);
				setComment("");
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	};

	return (
		<FanficCommentsContainer
			comments={fictionComments}
			comment={comment}
			handleCommentChange={handleCommentChange}
			handleCommentSubmit={handleCommentSubmit}
		/>
	);
}

export default FanficComments;

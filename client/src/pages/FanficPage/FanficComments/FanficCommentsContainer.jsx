import React from "react";
import Button from "../../../styles/Button.js";
import moment from "moment";
import {
	CommentsSection,
	CommentForm,
	Textarea,
	Comments,
	Comment
} from "./FanficCommentsStyles.js";

function FanficCommentsContainer({ comments, comment, handleCommentChange, handleCommentSubmit }) {
	let date = moment(comment.createdAt);

	return (
		<CommentsSection>
			<CommentForm onSubmit={handleCommentSubmit}>
				<Textarea
					name="comment"
					placeholder="Comment"
					id="comment"
					cols="30"
					rows="10"
					value={comment}
					onChange={handleCommentChange}
				/>
				<Button bold px="3rem" type="submit">
					Submit
				</Button>
			</CommentForm>
			<Comments>
				{comments.map((comment, i) => (
					<Comment key={comment._id}>
						<h3>{comment.userId.username}</h3>
						<p className="date">{date.format("Do MMM, YYYY")}</p>
						<p className="comment">{comment.body}</p>
					</Comment>
				))}
			</Comments>
		</CommentsSection>
	);
}

export default FanficCommentsContainer;

import React from "react";
import { Link } from "react-router-dom";
import truncate from "../../utils/truncate.js";
import { FaThumbsUp, FaRegThumbsUp, FaCommentAlt } from "react-icons/fa";
import {
	Card,
	CardImg,
	CardDetails,
	CardTitle,
	CardAuthor,
	CardDescription,
	CardCategory,
	CardActions,
	CardAction
} from "./FictionCardStyles.js";

function FictionCardContainer({
	full,
	category,
	description,
	data,
	likes,
	isLiked,
	handleLikeClick
}) {
	return (
		<Card full={full}>
			<CardImg>
				<img src={data.image} alt="fiction-img" />
			</CardImg>
			<CardDetails>
				<CardTitle>
					<Link to={`/fiction/${data._id}`}>{data.title}</Link>
				</CardTitle>
				<CardAuthor>
					<Link to={`/profile/${data.userId._id}`}>{data.userId.username}</Link>
				</CardAuthor>
				{category ? (
					<CardCategory>Category: {data.category}</CardCategory>
				) : description ? (
					<CardDescription>{truncate(data.description)}</CardDescription>
				) : (
					<br />
				)}

				<CardActions>
					<CardAction>
						<button onClick={handleLikeClick(data._id)}>
							{isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
						</button>
						<span>{likes}</span>
					</CardAction>
					<CardAction>
						<button>
							<FaCommentAlt />
						</button>
						<span>{data.commentsCount}</span>
					</CardAction>
				</CardActions>
			</CardDetails>
		</Card>
	);
}

export default FictionCardContainer;

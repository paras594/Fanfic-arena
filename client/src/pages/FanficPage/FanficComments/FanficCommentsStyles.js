import styled from "styled-components";
import { colors } from "../../../styles/variables.js";

export const CommentsSection = styled.section`
	width: 100%;
	max-width: 50rem;
	margin-left: auto;
	margin-right: auto;
	margin-top: 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CommentForm = styled.form`
	width: 100%;
	max-width: 45rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Textarea = styled.textarea`
	resize: none;
	width: 100%;
	height: 8rem;
	margin: 1rem 0;
	padding: 0.6rem;
	border: 0.1rem solid ${colors.commentTextareaBorder};
	border-radius: 0.3rem;
	font-family: inherit;
	font-size: 1rem;
	font-weight: 500;
	outline: none;
	color: ${colors.commentTextareaText};

	&::placeholder {
		font-weight: 600;
		color: ${colors.commentTextareaPlaceholder};
	}

	&:active,
	&:focus {
		border: 0.1rem solid ${colors.commentTextareaBorderFocus};
	}
`;

export const Comments = styled.div`
	width: 100%;
	margin-top: 3rem;
	padding-top: 2rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	border-top: 0.1rem solid ${colors.commentsBorder};
`;

export const Comment = styled.div`
	margin-bottom: 1.2rem;

	h3 {
		padding: 0.6rem 0;
		color: ${colors.commentUsername};
	}

	.date {
		font-weight: 500;
		font-size: 0.9rem;
		color: ${colors.commentDate};
	}

	.comment {
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.5;
		padding: 0.6rem 0;
		color: ${colors.commentText};
	}
`;

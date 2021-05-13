import styled from "styled-components";
import { colors } from "../../styles/variables.js";

export const Card = styled.div`
	display: flex;
	width: ${(props) => (props.full ? "100%" : "19.4rem")};
	min-width: 19.4rem;
	height: 11rem;

	@media (max-width: 1300px) {
		height: 9rem;
		min-width: 16rem;
		width: ${(props) => (props.full ? "100%" : "16rem")};
	}

	@media (max-width: 600px) {
		width: 100%;
		min-width: 100%;
	}
`;

export const CardImg = styled.div`
	flex: 0 0 7.3rem;
	height: 100%;
	overflow: hidden;
	border-radius: 8px;
	display: block;

	@media (max-width: 1300px) {
		flex: 0 0 5.8rem;
	}

	img {
		object-position: 50% 50%;
		object-fit: cover;
		display: block;
		width: 100%;
		height: 100%;
	}
`;

export const CardDetails = styled.div`
	flex: 1 0 1;
	height: 100%;
	padding-left: 0.6rem;
	padding-right: 0.4rem;
`;

export const CardTitle = styled.h3`
	font-size: 1.15rem;
	margin-top: 0.4rem;
	margin-bottom: 0.3rem;
	color: ${colors.fictionCardTitle};

	a {
		display: block;
		color: inherit;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	@media (max-width: 1300px) {
		font-size: 1rem;
	}
`;

export const CardAuthor = styled.p`
	font-weight: 600;
	font-size: 0.9rem;
	color: ${colors.fictionCardAuthor};

	a {
		display: block;
		color: inherit;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	@media (max-width: 1300px) {
		font-size: 0.8rem;
	}
`;

export const CardDescription = styled.p`
	font-size: 0.85rem;
	margin-top: 0.5rem;
	color: ${colors.fictionCardDescription};

	@media (max-width: 1300px) {
		font-size: 0.7rem;
		margin-top: 0.3rem;
	}

	@media (max-width: 500px) {
		font-size: 0.85rem;
	}
`;

export const CardCategory = styled.p`
	font-size: 0.8rem;
	font-weight: 600;
	margin: 1rem 0;
	color: ${colors.fictionCardCategory};
`;

export const CardActions = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.5rem;
	background: ${colors.fictionCardActionBg};
	color: ${colors.fictionCardActionsClr};
`;

export const CardAction = styled.div`
	display: flex;
	align-items: center;
	margin-right: 0.8rem;
	color: inherit;
	background: inherit;

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background: inherit;
		color: inherit;
		padding: 0.2rem;
		outline: none;
		font-size: 1.1rem;
		cursor: pointer;
	}

	span {
		font-family: "Raleway", sans-serif;
		font-size: 1rem;
		font-weight: 600;
		margin-left: 0.2rem;
		color: inherit;
	}
`;

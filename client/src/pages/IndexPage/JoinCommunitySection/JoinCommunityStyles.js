import styled from "styled-components";
import Button from "../../../styles/Button.js";
import { colors } from "../../../styles/variables.js";

export const Header = styled.header`
	width: 95%;
	height: 11rem;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 6rem;
	border-radius: 0.6rem;
	position: relative;

	@media (max-width: 1300px) {
		height: 9rem;
		border-radius: 0.3rem;
	}

	@media (max-width: 800px) {
		height: 7rem;
		width: 100%;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 0 20%;
		border-radius: inherit;
	}
`;

export const HeaderLogo = styled.div`
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 8rem;
	width: 8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${colors.joinCommunityLogoBg};
	color: ${colors.joinCommunityIconClr};
	font-size: 3rem;
	border: 0.4rem solid ${colors.joinCommunityLogoBorder};
	border-radius: 50%;

	@media (max-width: 1300px) {
		width: 6.4rem;
		height: 6.4rem;
		font-size: 2rem;
	}

	@media (max-width: 800px) {
		width: 6rem;
		height: 6rem;
		font-size: 1.7rem;
	}
`;

export const Heading = styled.h1`
	text-align: center;
	font-size: 2.4rem;
	color: ${colors.joinCommunityHeading};
	margin-bottom: 1rem;

	@media (max-width: 1300px) {
		font-size: 2rem;
	}

	@media (max-width: 800px) {
		font-size: 1.6rem;
	}
`;

export const P = styled.p`
	width: 38rem;
	margin: 0 auto;
	font-size: 1.1rem;
	line-height: 1.5;
	text-align: center;
	color: ${colors.joinCommunityText};

	@media (max-width: 1300px) {
		font-size: 1rem;
	}

	@media (max-width: 700px) {
		width: 90%;
	}

	@media (max-width: 500px) {
		width: 100%;
	}
`;

export const Center = styled.div`
	margin-top: 2rem;
	text-align: center;
`;

export const JoinButton = styled(Button)`
	box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.25);
	font-size: 1.2rem;
	font-weight: 500;

	@media (max-width: 1300px) {
		font-size: 1rem;
	}
`;

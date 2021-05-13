import styled from "styled-components";
import Wrapper from "../../../styles/Wrapper.js";
import Button from "../../../styles/Button.js";
import { colors } from "../../../styles/variables.js";

export const Div = styled.div`
	padding: 2rem 0;
	min-height: 32rem;
	height: 92vh;
	max-height: 39rem;

	@media (max-width: 900px) {
		height: 100%;
		max-height: 100%;
	}
`;

export const IndexGrid = styled(Wrapper)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 3fr 1fr;

	@media (max-width: 900px) {
		display: block;
	}
`;

export const IndexText = styled.div`
	grid-column: 1 / span 1;
	grid-row: 1 / span 1;
	height: 100%;
	display: inline-flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 900px) {
		text-align: center;
		display: block;
	}

	h1 {
		font-size: 3.2rem;
		margin: 0.8rem 0;
		color: ${colors.indexHeaderHeading};

		@media (max-width: 1300px) {
			font-size: 2.4rem;
		}

		@media (max-width: 400px) {
			font-size: 1.9rem;
		}
	}

	p {
		width: 80%;
		line-height: 1.5;
		font-weight: 500;
		font-size: 1.1rem;
		color: ${colors.indexHeaderText};

		@media (max-width: 1300px) {
			font-size: 1rem;
		}

		@media (max-width: 900px) {
			text-align: center;
			width: 100%;
			font-size: 1rem;
		}
	}
`;

export const IndexImg = styled.div`
	grid-column: 2 / -1;
	grid-row: 1 / -1;
	display: inline-block;
	width: 100%;
	height: 100%;

	@media (max-width: 900px) {
		display: block;
		margin: 3rem auto;
		width: 70%;
	}

	img {
		width: 100%;
		height: auto;
	}
`;

export const IndexButtons = styled.div`
	grid-column: 1 / span 1;
	grid-row: 2 / -1;
	align-self: start;

	display: flex;

	@media (max-width: 900px) {
		justify-content: center;
	}
`;

export const IndexButton = styled(Button)`
	margin-right: 1rem;
	font-weight: 600;
	font-size: 1.1rem;
	padding: 0.6rem 1.1rem;
	border-radius: 0.3rem;

	@media (max-width: 1300px) {
		font-size: 1rem;
		font-weight: 500;
	}

	@media (max-width: 900px) {
		margin: 0 0.6rem;
	}
`;

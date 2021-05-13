import styled from "styled-components";
import { colors } from "../../../styles/variables.js";

export const GetStartedCards = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	margin-top: 2.5rem;
	margin-bottom: 1rem;
`;

export const GetStartedCard = styled.div`
	width: 13rem;
	text-align: center;

	@media (max-width: 700px) {
		margin: 1.5rem 0;
	}

	.icon {
		font-size: 6rem;
		color: ${colors.getStartedIcon};
	}

	h3 {
		font-weight: 600;
		font-size: 1.4rem;
		color: ${colors.getStartedCardHeading};
		margin: 1rem;
	}

	p {
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.4;
		color: ${colors.getStartedCardText};
	}
`;

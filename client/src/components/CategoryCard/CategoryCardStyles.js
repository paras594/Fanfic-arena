import styled from "styled-components";
import { colors } from "../../styles/variables.js";

export const CategoryCard = styled.div`
	width: 6.8rem;
	height: 6.6rem;
	border-radius: 0.4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0.5rem;
	background: ${colors.categoryCardBg};
	transition: background 0.2s ease;

	&:hover {
		background: ${colors.categoryCardBgHover};
		cursor: pointer;
	}
`;

export const CategoryIcon = styled.div`
	font-size: 2.6rem;
	color: ${colors.categoryCardIcon};
`;

export const CategoryName = styled.p`
	font-size: 0.8rem;
	font-weight: bold;
	color: ${colors.categoryCardName};
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../styles/variables.js";

export const CategoryCards = styled.div`
	display: flex;
	justify-content: center;
	margin: 2.5rem 0;
	flex-wrap: wrap;
`;

export const MoreCategories = styled(Link)`
	display: block;
	width: 24rem;
	margin: 0 auto;
	text-align: center;
	font-weight: 600;
	font-size: 1.2rem;
	padding: 0.2rem;
	color: ${colors.moreCategoriesClr};
	text-decoration: none;

	@media (max-width: 700px) {
		font-size: 1rem;
		text-decoration: underline;
	}

	&:hover {
		text-decoration: underline;
	}
`;

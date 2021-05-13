import styled from "styled-components";
import { primaryFont } from "../../styles/typography.js";
import { colors } from "../../styles/variables.js";

export const Div = styled.div`
	display: flex;
	align-items: center;
	max-width: 16rem;
	width: 100%;
	position: relative;
`;

export const SearchForm = styled.form`
	width: 100%;

	@media (max-width: 1000px) {
		width: ${(props) => (props.open ? "16rem" : 0)};
		overflow: hidden;
		position: absolute;
		right: 0;
		top: 2.4rem;
		z-index: 99;
	}
`;

export const SearchIcon = styled.div`
	border-radius: 0.4rem;
	display: none;
	cursor: pointer;

	@media (max-width: 1000px) {
		font-size: 1.4rem;
		display: flex;
		align-items: center;
		padding: 0.1rem 0.4rem;
	}
`;

export const SearchInput = styled.input`
	width: 100%;
	padding: 0.3rem 0.8rem;
	font-size: 1rem;
	font-family: ${primaryFont};
	font-weight: 500;
	color: ${colors.searchText};
	border: 0.1rem solid ${colors.searchBorder};
	border-radius: 0.2rem;
	outline: none;
	z-index: 99;

	&:focus,
	&:active {
		border: 0.1rem solid ${colors.searchBorderFocus};
	}

	&::placeholder {
		color: ${colors.searchPlaceholder};
		font-weight: 500;
	}
`;

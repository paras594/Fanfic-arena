import styled from "styled-components";
import { colors } from "./variables.js";

export const Tabs = styled.div`
	display: inline-block;
	border: 0.2rem solid ${colors.tabsBorder};
	border-radius: 0.3rem;
	background: ${colors.tabsBg};
`;

export const Tab = styled.button`
	text-align: center;
	padding: 0.3rem 1.2rem;
	border: 0;
	outline: none;
	border-radius: 0.2rem;
	font-size: 1rem;
	font-weight: 500;
	background: ${colors.tabBg};
	color: ${colors.tabText};
	transition: background 0.25s ease, color 0.2s ease;

	@media (max-width: 500px) {
		font-size: 0.9rem;
		padding: 0.3rem 0.8rem;
	}

	&:hover {
		cursor: pointer;
		background: ${colors.tabHoverBg};
		color: ${colors.tabHoverText};
	}
`;

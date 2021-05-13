import styled from "styled-components";
import { colors } from "../../styles/variables.js";

export const OAuthBtns = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1.5rem 0;
`;

export const OAuthBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2.8rem;
	width: 2.8rem;
	border: 0.1rem solid ${colors.OAuthBtnBorder};
	border-radius: 50%;
	font-size: 1.4rem;
	margin: 0.4rem 0.6rem;
	background: ${colors.OAuthBtnBg};
	color: ${colors.OAuthBtnIcon};
	transition: background 0.2s ease, color 0.15s ease;

	&:hover {
		cursor: pointer;
		background: ${colors.OAuthBtnHoverBg};
		color: ${colors.OAuthBtnIconHover};
	}
`;

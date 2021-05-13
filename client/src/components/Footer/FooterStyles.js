import styled from "styled-components";
import { colors } from "../../styles/variables.js";

export const Footer = styled.footer`
	height: 3.5rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	margin-top: 4rem;
	background: ${colors.footerBg};

	@media (max-width: 500px) {
		flex-direction: column;
		height: 5rem;
		padding: 0.5rem 0;
	}
`;

export const FooterText = styled.p`
	font-size: 0.9rem;
	font-weight: 500;
	color: ${colors.footerText};
`;

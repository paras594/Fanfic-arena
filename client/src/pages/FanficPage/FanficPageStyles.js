import styled from "styled-components";
import { colors } from "../../styles/variables.js";
import { digitFont } from "../../styles/typography.js";

export const Buttons = styled.div`
	display: flex;
	margin-top: 1rem;
`;

export const CreatedAt = styled.p`
	margin: 0.4rem 0;
	padding: 0.5rem 0;
	font-size: 1rem;
	font-weight: 500;
	color: ${colors.fictionCreatedAt};

	.date {
		font-size: 0.9em;
		font-family: ${digitFont};
		font-weight: 400;
	}
`;

export const Description = styled.p`
	line-height: 1.4;
	font-size: 1rem;
	color: ${colors.fictionDescription};
`;

export const ContentBox = styled.div`
	margin-top: 2rem;
	padding: 1.5rem 0.5rem;
	border-top: 0.1rem solid ${colors.fictionContentBorder};
	border-bottom: 0.1rem solid ${colors.fictionContentBorder};
`;

export const Content = styled.div`
	font-size: 1.05rem;
	font-weight: 500;
	line-height: 1.5;
	color: ${colors.fictionContentText};
`;

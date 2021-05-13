import styled from "styled-components";
import { colors } from "../../styles/variables.js";

export const Div = styled.div`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const UpdatePasswordTitle = styled.h2`
	font-size: 1.4rem;
	text-align: center;
	margin-top: 2.4rem;
	color: ${colors.updateProfileTitleClr};
`;

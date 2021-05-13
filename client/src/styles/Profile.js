import styled from "styled-components";
import { colors } from "./variables.js";

export const ProfileName = styled.p`
	font-size: 1.3rem;
	font-weight: 700;
	margin-top: 1rem;
	text-transform: capitalize;
	color: ${(props) => (props.light ? colors.profileNameLight : colors.profileNameDark)};
	text-align: center;
`;

export const ProfileUsername = styled.p`
	font-size: 1rem;
	font-weight: 600;
	margin-top: 0.2rem;
	text-align: center;
	color: ${(props) => (props.light ? colors.profileUsernameLight : colors.profileUsernameDark)};
`;

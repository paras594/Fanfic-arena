import styled from "styled-components";
import { colors } from "./variables.js";

const MainHeading = styled.h1`
	padding: 0.8rem 0;
	text-align: center;
	font-size: 2rem;
	color: ${colors.MainHeadingText};
	position: relative;
	margin: ${(props) => (props.margin ? props.margin : 0)};

	@media (max-width: 1300px) {
		font-size: 1.7rem;
	}

	&::after {
		content: "";
		width: ${(props) => (props.underlineWidth ? props.underlineWidth : "2.5rem")};
		height: 0.3rem;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		background: ${colors.MainHeadingUnderline};
	}
`;

export default MainHeading;

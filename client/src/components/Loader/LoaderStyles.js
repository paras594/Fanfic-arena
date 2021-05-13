import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/variables.js";

import { fadeOut } from "react-animations";

const fadeOutItem = keyframes`${fadeOut}`;

export const Div = styled.div`
	height: 100vh;
	width: 100%;
	position: absolute;
	z-index: 999;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: white;
	opacity: 1;
	transition: all 0.5s ease;

	&.fadeOut {
		animation: ${fadeOutItem} 1s ease;
	}
`;

export const Dots = styled.div`
	display: flex;
`;

const bounceAnim = keyframes`
	0% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(-1.5rem);
	}

	100% {
		transform: translateY(0);
	}
`;

export const Dot = styled.div`
	height: 1.4rem;
	width: 1.4rem;
	border-radius: 50%;
	margin: 0.3rem;
	background: ${colors.dotsBg};
	animation: ${bounceAnim} 1s ease-in-out ${(props) => props.delay} infinite;
`;

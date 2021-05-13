import styled from "styled-components";
import { colors } from "../../../styles/variables.js";

export const Header = styled.header`
	height: 18rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	padding-top: 2.4rem;
	align-items: center;
	margin-bottom: 5rem;
	position: relative;
	z-index: 1;
`;

export const Bg = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;
	z-index: -1;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;
		width: 150vw;
		height: 100%;
		transform: translateX(-50%);
		z-index: -1;
		background: ${colors.profileHeaderBg};
		border-bottom-right-radius: 50%;
		border-bottom-left-radius: 50%;
	}
`;

export const ProfileStats = styled.div`
	display: flex;
	justify-content: space-between;
	width: 20rem;
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 0.4rem;
	z-index: 99;
	background: ${colors.profileStatsBg};
	box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.15);
`;

export const Stat = styled.div`
	padding: 1rem;
	text-align: center;
`;

export const StatTitle = styled.p`
	margin-bottom: 0.4rem;
	font-size: 0.9rem;
	font-weight: 600;
	color: ${colors.profileStatTitle};
`;

export const StatCount = styled.h3`
	font-size: 1.4rem;
	font-weight: 500;
	font-family: "Rubik";
	color: ${colors.profileStatCount};
`;

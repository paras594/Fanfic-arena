import styled from "styled-components";
import Wrapper from "../../styles/Wrapper.js";
import Button from "../../styles/Button.js";
import { colors } from "../../styles/variables.js";

export const Nav = styled.nav`
	background: ${colors.navBg};
	padding: 0.5rem 0;
`;

export const NavWrapper = styled(Wrapper)`
	max-width: 1366px;
	width: 90%;
	margin: 0 auto;
	display: flex;
	align-items: center;

	@media (max-width: 900px) {
		justify-content: space-between;
	}
`;

export const NavToggleBtn = styled.div`
	display: none;

	@media (max-width: 900px) {
		display: flex;
		align-items: center;

		font-size: 1.8rem;
		color: #fff;
		cursor: pointer;
	}
`;

export const NavToggleMenu = styled.div`
	position: absolute;
	top: 2.7rem;
	left: 0;
	z-index: 99;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background: ${colors.navBg};
	width: 100%;
	padding: 0 2rem;
	height: ${(props) => (props.open ? (props.big ? "14rem" : "11rem") : 0)};
	overflow: hidden;
	transition: all 0.2s linear;

	@media (max-width: 400px) {
		padding: 0 1.5rem;
	}

	a {
		font-size: 1.1rem;
		text-decoration: none;
		color: ${colors.navLinkText};
		font-weight: 600;
		margin-bottom: 1rem;
	}

	button {
		margin-bottom: 1rem;
	}
`;

export const NavLinks = styled.div`
	display: flex;
	margin-left: 2rem;
	margin-right: auto;

	@media (max-width: 900px) {
		display: none;
	}

	a {
		padding: 0.3rem 0.5rem;
		margin-right: 1rem;
		border-radius: 0.2rem;
		font-size: 0.9rem;
		text-decoration: none;
		color: ${colors.navLinkText};
		font-weight: 600;
		display: flex;
		align-items: center;

		span {
			margin-right: 0.2rem;
		}

		&:hover {
			background: rgba(255, 255, 255, 0.2);
		}
	}
`;

export const NavSearch = styled.div``;

export const NavButtons = styled.div`
	display: flex;

	@media (max-width: 900px) {
		display: none;
	}

	button {
		margin-left: 0.8rem;
	}
`;

export const NavButton = styled(Button)`
	padding: 0.4rem 0.8rem;
	border-radius: 0.2rem;
`;

export const NavProfileBtn = styled.button`
	position: relative;
	border: none;
	background: none;
	border-radius: 50%;
	height: 1.9rem;
	width: 1.9rem;
	cursor: pointer;
	outline: none;
`;

export const NavProfileImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	border: 2px solid #fff;
	object-fit: cover;
	outline: none;
`;

export const NavProfileMenu = styled.div`
	position: absolute;
	right: 0;
	top: 2.7rem;
	z-index: 99;
	outline: none;
	border: 1px solid #ccc;
	background: #fff;
	padding: 0.4rem 0;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	display: ${(props) => (props.open ? "flex" : "none")};
	flex-direction: column;
	width: 8rem;

	a {
		display: block;
		text-decoration: none;
		color: #000;
		font-size: 1rem;
		padding: 0.4rem 0.8rem;
		text-align: left;

		&:hover {
			background: #eee;
			cursor: pointer;
		}
	}

	p {
		display: block;
		color: #000;
		font-size: 1rem;
		padding: 0.4rem 0.8rem;
		text-align: left;

		&:hover {
			background: #eee;
			cursor: pointer;
		}
	}
`;

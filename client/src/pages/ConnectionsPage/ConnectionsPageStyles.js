import styled from "styled-components";
import { Div as Img } from "../../components/ProfileImg/ProfileImgStyles.js";
import { ProfileName, ProfileUsername } from "../../styles/Profile.js";

export const Div = styled.div`
	min-height: 100vh;
	height: 100%;
	display: grid;
	grid-template-rows: auto 1fr auto;
`;

export const Userinfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin: 1rem;
`;

export const Connections = styled.div`
	width: 40rem;
	max-width: 100%;
	margin: 0 auto;

	@media (max-width: 700px) {
		width: 100%;
	}
`;

export const Connection = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
`;

export const UserImg = styled(Img)`
	width: 3.5rem;
	height: 3.5rem;

	@media (max-width: 500px) {
		width: 2.4rem;
		height: 2.4rem;
	}
`;

export const Name = styled(ProfileName)`
	font-size: 1rem;
	text-align: left;
	margin: 0;
	margin-left: 1rem;
	margin-right: 0.5rem;

	a {
		color: inherit;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	@media (max-width: 500px) {
		margin-left: 0.5rem;
		font-weight: 500;
	}
`;

export const Username = styled(ProfileUsername)`
	font-size: 0.9rem;
	text-align: left;
	margin: 0;

	a {
		color: inherit;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

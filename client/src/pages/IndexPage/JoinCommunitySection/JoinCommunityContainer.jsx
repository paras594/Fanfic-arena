import React from "react";
import Section from "../../../styles/Section.js";
import Wrapper from "../../../styles/Wrapper.js";
import { LogoIcon } from "../../../components/Logo/LogoContainer.jsx";
import { Header, HeaderLogo, Heading, P, Center, JoinButton } from "./JoinCommunityStyles.js";
import JoinCommunityImg from "../../../images/join-community-img.jpg";

function JoinCommunityContainer() {
	return (
		<Section>
			<Wrapper>
				<Header>
					<img src={JoinCommunityImg} alt="join community" />
					<HeaderLogo>
						<LogoIcon />
					</HeaderLogo>
				</Header>
				<Heading>Join Our Community</Heading>
				<P>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sit purus id viverra
					arcu, commodo.
				</P>
				<Center>
					<JoinButton px="1.6rem" py=".6rem">
						Register Now
					</JoinButton>
				</Center>
			</Wrapper>
		</Section>
	);
}

export default JoinCommunityContainer;

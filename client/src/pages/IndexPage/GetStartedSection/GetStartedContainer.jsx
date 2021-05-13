import React from "react";
import { BsBook, BsPencil } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import MainHeading from "../../../styles/MainHeading.js";
import Wrapper from "../../../styles/Wrapper.js";
import Section from "../../../styles/Section.js";
import { GetStartedCards, GetStartedCard } from "./GetStartedStyles.js";

function GetStartedContainer() {
	return (
		<Section bg>
			<Wrapper>
				<MainHeading>Get Started</MainHeading>
				<GetStartedCards>
					<GetStartedCard>
						<BsBook className="icon" />
						<h3>Read</h3>
						<p>Read great fictions on topics that interests you</p>
					</GetStartedCard>
					<GetStartedCard>
						<BsPencil className="icon" />
						<h3>Write</h3>
						<p>Express your ideas and share them with others</p>
					</GetStartedCard>
					<GetStartedCard>
						<AiOutlineCompass className="icon" />
						<h3>Explore</h3>
						<p>Explore new topics, genres and stories</p>
					</GetStartedCard>
				</GetStartedCards>
			</Wrapper>
		</Section>
	);
}

export default GetStartedContainer;

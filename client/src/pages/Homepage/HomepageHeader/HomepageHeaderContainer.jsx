import React from "react";
import Wrapper from "../../../styles/Wrapper.js";
import MainHeading from "../../../styles/MainHeading.js";
import FictionGrid from "../../../styles/FictionGrid.js";
import FictionCard from "../../../components/FictionCard/FictionCard.js";
import { Header } from "./HomepageHeaderStyles.js";

function HomepageHeaderContainer({ data }) {
	return (
		<Header>
			<Wrapper>
				<MainHeading>Top Picks For You !</MainHeading>
				<FictionGrid>
					{data.map((card) => (
						<FictionCard key={card._id} description data={card} />
					))}
				</FictionGrid>
			</Wrapper>
		</Header>
	);
}

export default HomepageHeaderContainer;

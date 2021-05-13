import React from "react";
import Wrapper from "../../styles/Wrapper.js";
import Section from "../../styles/Section.js";
import FictionGrid from "../../styles/FictionGrid.js";
import MainHeading from "../../styles/MainHeading.js";
import FictionCard from "../FictionCard/FictionCard.js";
import Button from "../../styles/Button.js";
import Center from "../../styles/Center.js";

function FictionSectionContainer({ bg, heading, btn, data, handleClick }) {
	return (
		<Section bg={bg}>
			<Wrapper>
				{heading && <MainHeading>{heading}</MainHeading>}
				<FictionGrid>
					{data.map((card, i) => (
						<FictionCard key={card._id} data={card} />
					))}
				</FictionGrid>
				{btn && (
					<Center mt="4rem">
						<Button onClick={handleClick(heading)}>View More</Button>
					</Center>
				)}
			</Wrapper>
		</Section>
	);
}

export default FictionSectionContainer;

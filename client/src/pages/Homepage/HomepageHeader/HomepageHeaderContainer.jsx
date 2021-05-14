import React from "react";
import Wrapper from "../../../styles/Wrapper.js";
import MainHeading from "../../../styles/MainHeading.js";
import FictionGrid from "../../../styles/FictionGrid.js";
import FictionCard from "../../../components/FictionCard/FictionCard.js";
import { Header } from "./HomepageHeaderStyles.js";
import { Dot, Dots } from "../../../components/Loader/LoaderStyles.js";

function HomepageHeaderContainer({ data, isLoading }) {
	return (
		<Header>
			<Wrapper>
				<MainHeading>Top Picks For You !</MainHeading>
				{isLoading ? (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							paddingTop: 100,
							paddingBottom: 100,
						}}
					>
						<Dots>
							<Dot delay="0.1s" />
							<Dot delay="0.3s" />
							<Dot delay="0.4s" />
						</Dots>
					</div>
				) : (
					<FictionGrid>
						{data.map((card) => (
							<FictionCard key={card._id} description data={card} />
						))}
					</FictionGrid>
				)}
			</Wrapper>
		</Header>
	);
}

export default HomepageHeaderContainer;

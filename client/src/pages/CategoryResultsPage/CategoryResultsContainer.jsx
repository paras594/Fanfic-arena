import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import FooterContainer from "../../components/Footer/FooterContainer.jsx";
import MainHeading from "../../styles/MainHeading.js";
import Wrapper from "../../styles/Wrapper.js";
import FictionGrid from "../../styles/FictionGrid.js";
import FictionCard from "../../components/FictionCard/FictionCard.js";
import { Div } from "./CategoryResultsStyles.js";

function CategoryResultsContainer({ results }) {
	return (
		<Div>
			<Navbar />
			<Wrapper pt="1rem">
				<MainHeading>Category Results</MainHeading>
				{results.length ? (
					<FictionGrid>
						{results.map((fic) => (
							<FictionCard key={fic._id} data={fic} />
						))}
					</FictionGrid>
				) : (
					<h2 style={{ textAlign: "center", marginTop: "2rem" }}>Oops! No results found.</h2>
				)}
			</Wrapper>
			<FooterContainer />
		</Div>
	);
}

export default CategoryResultsContainer;

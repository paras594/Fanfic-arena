import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import FooterContainer from "../../components/Footer/FooterContainer.jsx";
import MainHeading from "../../styles/MainHeading.js";
import Wrapper from "../../styles/Wrapper.js";
import CategoryCardsContainer from "./CategoryCards/CategoryCardsContainer.jsx";
import { Div } from "./CategoriesPageStyles.js";

function CategoriesPageContainer({ handleCardClick }) {
	return (
		<Div>
			<Navbar />
			<Wrapper pt="1.5rem">
				<MainHeading>All Categories</MainHeading>
				<CategoryCardsContainer handleCardClick={handleCardClick} />
			</Wrapper>
			<FooterContainer />
		</Div>
	);
}

export default CategoriesPageContainer;

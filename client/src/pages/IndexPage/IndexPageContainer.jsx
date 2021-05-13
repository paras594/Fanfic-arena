import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import IndexHeaderContainer from "./IndexHeader/IndexHeaderContainer.jsx";
import GetStartedContainer from "./GetStartedSection/GetStartedContainer.jsx";
import FictionSection from "../../components/FictionSection/FictionSection.js";
import CategoriesContainer from "./CategoriesSection/CategoriesSectionContainer.jsx";
import JoinCommunityContainer from "./JoinCommunitySection/JoinCommunityContainer.jsx";
import FooterContainer from "../../components/Footer/FooterContainer.jsx";

function IndexPageContainer({ latestFictions, popularFictions }) {
	return (
		<div>
			<Navbar />
			<IndexHeaderContainer />
			<GetStartedContainer />
			<FictionSection heading="Latest Fictions" data={latestFictions} />
			<FictionSection bg heading="Popular Fictions" data={popularFictions} />
			<CategoriesContainer />
			<JoinCommunityContainer />
			<FooterContainer />
		</div>
	);
}

export default IndexPageContainer;

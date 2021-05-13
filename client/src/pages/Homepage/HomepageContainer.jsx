import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import HomepageHeader from "./HomepageHeader/HomepageHeader.js";
import CategoriesSection from "./CategoriesSection/CategoriesSection.js";
import FictionSection from "../../components/FictionSection/FictionSection.js";
import FooterContainer from "../../components/Footer/FooterContainer.jsx";

function HomepageContainer({ sectionsData }) {
	console.log(sectionsData);
	return (
		<>
			<Navbar />
			<HomepageHeader />
			<CategoriesSection />
			{sectionsData.map((section, i) => (
				<FictionSection key={i} heading={section.title} data={section.data} btn />
			))}
			<FooterContainer />
		</>
	);
}

export default HomepageContainer;

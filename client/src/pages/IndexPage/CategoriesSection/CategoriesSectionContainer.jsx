import React from "react";
import Section from "../../../styles/Section.js";
import Wrapper from "../../../styles/Wrapper.js";
import MainHeading from "../../../styles/MainHeading.js";
import { CategoryCards, MoreCategories } from "./CategoriesSectionStyles.js";
import CategoryCardContainer from "../../../components/CategoryCard/CategoryCardContainer.jsx";
import categories from "../../../utils/categories.js";

function CategoriesSectionContainer() {
	const data = [];

	for (let i = 0; i < 6; i++) {
		let category = categories[i];
		data.push(<CategoryCardContainer key={i} Icon={category.icon} name={category.name} />);
	}

	return (
		<Section>
			<Wrapper>
				<MainHeading>Explore Categories</MainHeading>
				<CategoryCards>{data}</CategoryCards>
				<MoreCategories to="/categories">. . . and many more topics to explore.</MoreCategories>
			</Wrapper>
		</Section>
	);
}

export default CategoriesSectionContainer;

import React from "react";
import categories from "../../../utils/categories.js";
import Section from "../../../styles/Section.js";
import CategoryCardContainer from "../../../components/CategoryCard/CategoryCardContainer.jsx";
import { Categories } from "./CategoriesSectionStyles.js";

function CategoriesSectionContainer() {
	const data = categories.slice(0, 6);

	return (
		<Section>
			<Categories>
				{data.map((category, i) => (
					<CategoryCardContainer key={i} Icon={category.icon} name={category.name} />
				))}
			</Categories>
		</Section>
	);
}

export default CategoriesSectionContainer;

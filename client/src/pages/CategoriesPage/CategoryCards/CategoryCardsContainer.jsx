import React from "react";
import categories from "../../../utils/categories.js";
import CategoryCardContainer from "../../../components/CategoryCard/CategoryCardContainer.jsx";
import { Cards } from "./CategoryCardsStyles.js";

function CategoryCardsContainer() {
	return (
		<Cards>
			{categories.map((category, i) => (
				<CategoryCardContainer key={i} Icon={category.icon} name={category.name} />
			))}
		</Cards>
	);
}

export default CategoryCardsContainer;

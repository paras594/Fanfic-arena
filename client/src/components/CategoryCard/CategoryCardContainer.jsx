import React from "react";
import { useHistory } from "react-router-dom";
import { CategoryCard, CategoryIcon, CategoryName } from "./CategoryCardStyles.js";

function CategoryCardContainer({ Icon, name }) {
	const history = useHistory();

	const handleCardClick = () => {
		history.push(`/categories/${name}`);
	};

	return (
		<CategoryCard onClick={handleCardClick}>
			<CategoryIcon>
				<Icon />
			</CategoryIcon>
			<CategoryName>{name}</CategoryName>
		</CategoryCard>
	);
}

export default CategoryCardContainer;

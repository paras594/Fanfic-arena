import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CategoryResultsContainer from "./CategoryResultsContainer.jsx";

function CategoryResultsPage() {
	const [results, setResults] = useState([]);
	const params = useParams();
	const { category } = params;

	useEffect(() => {
		let url = `/api/fictions/categories/${category}`;

		if (category === "Popular Fictions") {
			url = `/api/fictions?sort=-likesCount`;
		} else if (category === "Latest Fictions") {
			url = `/api/fictions?sort=-createdAt`;
		}

		axios
			.get(url)
			.then((res) => {
				const { message, fictions } = res.data;

				console.log(message);
				setResults(fictions);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, [category]);

	return <CategoryResultsContainer results={results} />;
}

export default CategoryResultsPage;

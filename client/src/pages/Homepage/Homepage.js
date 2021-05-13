import React, { useState, useEffect } from "react";
import HomepageContainer from "./HomepageContainer.jsx";
import categories from "../../utils/categories.js";
import Loader from "../../components/Loader/Loader.js";
import axios from "axios";

function Homepage() {
	const [sectionsData, setSectionsData] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchSectionsData = async () => {
		console.log("fetching..");
		let arr = [];

		let latestRes = await axios.get(`/api/fictions?sort=-createdAt&limit=6`);
		let popularRes = await axios.get(
			`/api/fictions?sort=-likesCount&limit=6`
		);

		arr.push({
			title: "Latest Fictions",
			data: latestRes.data.fictions,
		});

		arr.push({
			title: "Popular Fictions",
			data: popularRes.data.fictions,
		});

		for (let category of categories) {
			const res = await axios.get(
				`/api/fictions/categories/${category.name}?limit=6`
			);

			arr.push({
				title: category.name,
				data: res.data.fictions,
			});
		}

		setSectionsData(arr);
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true);
		fetchSectionsData();
	}, []);

	if (loading) return <Loader />;

	return <HomepageContainer sectionsData={sectionsData} />;
}

export default Homepage;

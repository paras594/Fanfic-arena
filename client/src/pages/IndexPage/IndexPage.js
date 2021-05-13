import React, { useState, useEffect } from "react";
import IndexPageContainer from "./IndexPageContainer.jsx";
import axios from "axios";

function IndexPage() {
	const [latestFictions, setLatestFictions] = useState([]);
	const [popularFictions, setPopularFictions] = useState([]);

	useEffect(() => {
		// fetch latest fictions
		axios
			.get(`/api/fictions?sort=-createdAt&limit=6`)
			.then((res) => {
				const { fictions } = res.data;

				setLatestFictions(fictions);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, []);

	useEffect(() => {
		// fetch popular fictions
		axios
			.get(`/api/fictions?sort=-likesCount&limit=6`)
			.then((res) => {
				console.info(res.data.message);
				const { fictions } = res.data;

				setPopularFictions(fictions);
			})
			.catch((err) => {
				console.log(err.respnose.data);
			});
	}, []);

	return (
		<IndexPageContainer
			latestFictions={latestFictions}
			popularFictions={popularFictions}
		/>
	);
}

export default IndexPage;

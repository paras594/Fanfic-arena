import React, { useState, useEffect } from "react";
import HomepageHeaderContainer from "./HomepageHeaderContainer.jsx";
import axios from "axios";

function HomepageHeader() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchHeaderData = async (source) => {
		try {
			let res = await axios.get(`/api/fictions?sort=-likesCount&limit=3`, {
				cancelToken: source.token,
			});
			setData(res.data.fictions);
			setIsLoading(false);
		} catch (err) {
			if (axios.isCancel(err)) {
			} else {
				console.log(err);
			}
		}
	};

	useEffect(() => {
		const source = axios.CancelToken.source();

		setIsLoading(true);
		fetchHeaderData(source);

		return () => {
			source.cancel();
		};
	}, []);

	if (isLoading) return <h1>Loading...</h1>;

	return <HomepageHeaderContainer data={data} />;
}

export default HomepageHeader;

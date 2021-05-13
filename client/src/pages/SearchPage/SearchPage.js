import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SearchPageContainer from "./SearchPageContainer.jsx";

function SearchPage() {
	const location = useLocation();
	const [results, setResults] = useState([]);
	const params = new URLSearchParams(location.search);
	const query = params.get("q");

	useEffect(() => {
		axios.get(`/api/fictions/search?q=${query}`).then((res) => {
			const { results } = res.data;
			console.log(res.data);
			setResults(results);
		});
	}, [query]);

	return <SearchPageContainer results={results} query={query} />;
}

export default SearchPage;

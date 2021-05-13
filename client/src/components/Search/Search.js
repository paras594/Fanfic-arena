import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchContainer from "./SearchContainer.jsx";

function Search() {
	const history = useHistory();
	const [input, setInput] = useState("");

	const handleInputChange = (e) => setInput(e.target.value);
	const handleFormSubmit = (e) => {
		e.preventDefault();

		history.push(`/search?q=${input}`);

		setInput("");
	};

	return (
		<SearchContainer
			input={input}
			handleInputChange={handleInputChange}
			handleFormSubmit={handleFormSubmit}
		/>
	);
}

export default Search;

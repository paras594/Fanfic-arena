import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Div, SearchForm, SearchInput, SearchIcon } from "./SearchStyles.js";

function SearchContainer({ input, handleInputChange, handleFormSubmit }) {
	const [search, setSearch] = useState(false);

	const toggleSearch = (e) => setSearch(!search);

	return (
		<Div>
			<SearchForm onSubmit={handleFormSubmit} open={search}>
				<SearchInput
					type="text"
					placeholder="Search Here"
					name="search"
					value={input}
					onChange={handleInputChange}
				/>
			</SearchForm>
			<SearchIcon onClick={toggleSearch}>
				<FaSearch color="#fff" />
			</SearchIcon>
		</Div>
	);
}

export default SearchContainer;

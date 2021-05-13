import React from "react";
import { useHistory } from "react-router-dom";
import FictionSectionContainer from "./FictionSectionContainer.jsx";

function FictionSection(props) {
	const history = useHistory();

	const handleClick = (title) => () => {
		console.log(title);
		history.push(`/categories/${title}`);
	};

	return <FictionSectionContainer {...props} handleClick={handleClick} />;
}

export default FictionSection;

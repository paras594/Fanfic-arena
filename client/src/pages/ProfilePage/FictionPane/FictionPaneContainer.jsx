import React from "react";
import FictionGrid from "../../../styles/FictionGrid.js";
import FictionCard from "../../../components/FictionCard/FictionCard.js";

function FictionPaneContainer({ data }) {
	return (
		<FictionGrid>
			{data.map((fic) => (
				<FictionCard key={fic._id} data={fic} />
			))}
		</FictionGrid>
	);
}

export default FictionPaneContainer;

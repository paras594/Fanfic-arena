import styled from "styled-components";

const FictionGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 1rem;
	row-gap: 3rem;
	justify-items: center;
	align-items: center;
	margin-top: 3rem;
	margin-bottom: 1.5rem;

	@media (max-width: 920px) {
		grid-template-columns: 1fr 1fr;
		row-gap: 2.4rem;
	}

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		justify-content: start;
		align-items: start;
		row-gap: 1rem;
	}
`;

export default FictionGrid;

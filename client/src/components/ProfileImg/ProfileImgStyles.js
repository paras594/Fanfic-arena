import styled from "styled-components";

export const Div = styled.div`
	display: block;
	width: 6rem;
	height: 6rem;
	margin: 0.4rem;
	border-radius: 0.3rem;
	box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

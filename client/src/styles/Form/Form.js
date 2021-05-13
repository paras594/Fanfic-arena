import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 30rem;
	margin: ${(props) => props.my || 0} auto;

	@media (max-width: 500px) {
		width: 100%;
	}
`;

export default Form;

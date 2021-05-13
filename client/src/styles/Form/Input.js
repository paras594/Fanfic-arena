import styled from "styled-components";
import { colors } from "../variables.js";

export const InputGroup = styled.div`
	width: 18rem;
	margin-bottom: 1rem;
`;

export const Input = styled.input`
	width: 18rem;
	font-size: 1rem;
	font-weight: 500;
	padding: 0.5rem 0.7rem;
	border: 0.1rem solid ${colors.inputBorder};
	border-radius: 0.3rem;
	color: ${colors.inputText};

	&:active,
	&:focus {
		border: 0.1rem solid ${colors.inputBorderActive};
		outline: none;
	}

	&::placeholder {
		color: ${colors.inputPlaceholder};
		font-family: inherit;
	}
`;

export const InputError = styled.p`
	font-size: 0.8rem;
	font-weight: 500;
	color: ${colors.inputErrorText};
	padding: 0.2rem 0.5rem;
`;

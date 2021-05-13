import styled from "styled-components";
import { colors } from "../../styles/variables.js";
import { primaryFont } from "../../styles/typography.js";

export const Div = styled.div`
	min-height: 100vh;
	height: 100%;
	display: grid;
	grid-template-rows: auto 1fr auto;
`;

export const Form = styled.form`
	margin-top: 2rem;
`;

export const ChooseImg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const FictionDetails = styled.div`
	display: flex;
	margin-bottom: 2rem;
`;

export const FictionInputs = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-left: 1rem;

	.inputs {
		width: 100%;
		display: flex;
		margin-bottom: 0.5rem;

		input {
			flex: 1;
		}
	}

	.textarea {
		flex: 1;

		textarea {
			resize: none;
			height: 100%;
			width: 100%;
			font-size: 1rem;
			font-weight: 500;
			font-family: inherit;
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
		}
	}
`;

export const SelectBtn = styled.select`
	color: ${(props) => (props.invert ? colors.btnTextLight : colors.btnTextDark)};
	background: ${(props) => (props.invert ? colors.btnBgDark : colors.btnBgLight)};
	font-size: 0.9rem;
	font-family: ${primaryFont};
	font-weight: ${(props) => (props.bold ? 600 : 500)};
	border: 0;
	border-radius: 0.25rem;
	padding-top: ${(props) => props.py || ".5rem"};
	padding-bottom: ${(props) => props.py || ".5rem"};
	padding-right: ${(props) => props.px || "1rem"};
	padding-left: ${(props) => props.px || "1rem"};
	margin-left: 0.5rem;
	cursor: pointer;

	option {
		background: #fff;
	}
`;

export const FictionImg = styled.div`
	width: 7rem;
	height: 10.5rem;
	overflow: hidden;
	border-radius: 8px;
	display: block;

	img {
		object-position: 50% 50%;
		object-fit: cover;
		display: block;
		width: 100%;
		height: 100%;
	}
`;

export const UploadBtn = styled.div`
	position: relative;
	overflow: hidden;
	display: inline-block;
	cursor: pointer;
	margin-top: 0.5rem;

	input {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		font-size: 2rem;
		opacity: 0;
	}
`;

import styled, { css } from "styled-components";
import { primaryFont } from "./typography.js";
import { colors } from "./variables.js";

const marginMixin = css`
	margin-top: ${(props) => props.mt || props.my || 0};
	margin-bottom: ${(props) => props.mb || props.my || 0};
	margin-right: ${(props) => props.mr || props.mx || 0};
	margin-left: ${(props) => props.ml || props.mx || 0};
`;

const Button = styled.button`
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

	${marginMixin};

	@media (max-width: 500px) {
		padding-top: ${(props) => props.py || ".4rem"};
		padding-bottom: ${(props) => props.py || ".4rem"};
		padding-right: ${(props) => props.px || ".8rem"};
		padding-left: ${(props) => props.px || ".8rem"};
	}

	&:hover {
		cursor: pointer;
	}
`;

export default Button;

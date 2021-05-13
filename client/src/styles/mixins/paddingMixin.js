import { css } from "styled-components";

const paddingMixin = css`
	padding-top: ${(props) => props.pt || props.py || 0};
	padding-bottom: ${(props) => props.pb || props.py || 0};
	padding-right: ${(props) => props.pr || props.px || 0};
	padding-left: ${(props) => props.pl || props.px || 0};
`;

export default paddingMixin;

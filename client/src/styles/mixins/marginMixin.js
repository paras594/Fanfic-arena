import { css } from "styled-components";

const marginMixin = css`
	margin-top: ${(props) => props.mt || props.my || 0};
	margin-bottom: ${(props) => props.mb || props.my || 0};
	margin-right: ${(props) => props.mr || props.mx || 0};
	margin-left: ${(props) => props.ml || props.mx || 0};
`;

export default marginMixin;

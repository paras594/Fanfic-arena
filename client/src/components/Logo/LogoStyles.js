import styled from "styled-components";
import { Link } from "react-router-dom";
import { logoFont } from "../../styles/typography.js";

export const Name = styled(Link)`
	color: #fff;
	font-family: ${logoFont};
	margin-left: 0.5rem;
	text-decoration: none;
	display: block;
`;

export const Div = styled.div`
	font-size: ${(props) => props.fontSize};
	display: flex;
	align-items: center;
`;

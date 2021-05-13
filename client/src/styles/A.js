import styled from "styled-components";
import { Link } from "react-router-dom";

const A = styled(Link)`
	text-decoration: none;
	font-size: ${(props) => (props.fontSize ? props.fontSize : ".9rem")};

	&:hover {
		text-decoration: underline;
	}
`;

export default A;

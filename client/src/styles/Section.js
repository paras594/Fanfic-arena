import styled from "styled-components";
import { colors } from "./variables.js";

const Section = styled.section`
	background: ${(props) => (props.bg ? colors.sectionBg : "#fff")};
	padding: 1.8rem 0;
	margin: 2rem 0;
`;

export default Section;

import styled from "styled-components";
import paddingMixin from "./mixins/paddingMixin.js";

const Wrapper = styled.div`
	max-width: 1366px;
	width: 90%;
	margin: 0 auto;
	${paddingMixin};

	@media (max-width: 800px) {
		width: 95%;
	}
`;

export default Wrapper;

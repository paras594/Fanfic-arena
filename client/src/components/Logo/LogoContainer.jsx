import React from "react";
import { FaFeatherAlt } from "react-icons/fa";
import { Name, Div } from "./LogoStyles.js";

function LogoText({ goTo = "/" }) {
	return <Name to={goTo}>FANFIC ARENA</Name>;
}

export function LogoIcon(props) {
	return <FaFeatherAlt {...props} />;
}

function Logo({ fontSize, goTo }) {
	return (
		<Div fontSize={fontSize}>
			<LogoIcon color="#FFC54D" size="1.4em" />
			<LogoText goTo={goTo} />
		</Div>
	);
}

export default Logo;

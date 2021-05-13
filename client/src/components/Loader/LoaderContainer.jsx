import React, { useEffect, useState } from "react";
import { Div, Dots, Dot } from "./LoaderStyles.js";

function LoaderContainer() {
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		return () => {
			setFadeOut(true);
		};
	}, [fadeOut]);
	return (
		<Div className={fadeOut ? "fadeOut" : ""}>
			<Dots>
				<Dot delay="0.1s" />
				<Dot delay="0.3s" />
				<Dot delay="0.4s" />
			</Dots>
		</Div>
	);
}

export default LoaderContainer;

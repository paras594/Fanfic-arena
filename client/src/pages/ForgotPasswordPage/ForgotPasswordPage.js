import React, { useState } from "react";
import axios from "axios";
import ForgotPasswordPageContainer from "./ForgotPasswordPageContainer.jsx";

function ForgotPassword() {
	const [email, setEmail] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		axios.post("/api/users/forgot-password", { email }).then((res) => {
			console.log(res.data);
			setEmail("");
		});
	};

	return (
		<ForgotPasswordPageContainer
			email={email}
			handleEmailChange={handleEmailChange}
			handleFormSubmit={handleFormSubmit}
		/>
	);
}

export default ForgotPassword;

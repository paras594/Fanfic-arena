import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ResetPasswordPageContainer from "./ResetPasswordPageContainer.jsx";

function ResetPasswordPage() {
	const [inputs, setInputs] = useState({
		password: "",
		password2: ""
	});
	const [errors, setErrors] = useState({
		password: "",
		password2: ""
	});
	const { resetId } = useParams();

	const handleInputChange = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!resetId) {
			return;
		}

		let data = { resetId, ...inputs };

		axios
			.patch("/api/users/reset-password", data)
			.then((res) => {
				console.log(res.data);

				setInputs({
					password: "",
					password2: ""
				});
			})
			.catch((err) => {
				const { data } = err.response;
				setInputs({
					password: data.inputs.password,
					password2: data.inputs.password2
				});
				setErrors({
					password: "",
					password2: "",
					...data.errors
				});
			});
	};

	return (
		<ResetPasswordPageContainer
			inputs={inputs}
			errors={errors}
			handleInputChange={handleInputChange}
			handleFormSubmit={handleFormSubmit}
		/>
	);
}

export default ResetPasswordPage;

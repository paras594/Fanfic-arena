import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import RegisterPageContainer from "./RegisterPageContainer.jsx";

function RegisterPage() {
	const history = useHistory();
	const [formInputs, setFormInputs] = useState({
		username: "",
		email: "",
		password: "",
		password2: ""
	});
	const [errors, setErrors] = useState({
		username: "",
		email: "",
		password: "",
		password2: ""
	});

	const handleInputChange = (e) => {
		setFormInputs({
			...formInputs,
			[e.target.name]: e.target.value
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		axios
			.post("/api/users/register", formInputs)
			.then((res) => {
				console.log(res.data);
				const inputs = {
					username: "",
					email: "",
					password: "",
					password2: ""
				};
				setFormInputs(inputs);
				setErrors(inputs);
				toast.success("Registered Successfully !");
				history.push("/login");
			})
			.catch((err) => {
				const { data } = err.response;
				console.error(data.message);
				setFormInputs(data.inputs);
				setErrors({
					username: "",
					email: "",
					password: "",
					password2: "",
					...data.errors
				});
			});
	};

	return (
		<RegisterPageContainer
			formInputs={formInputs}
			errors={errors}
			handleInputChange={handleInputChange}
			handleFormSubmit={handleFormSubmit}
		/>
	);
}

export default RegisterPage;

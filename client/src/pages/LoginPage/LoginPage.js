import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import LoginPageContainer from "./LoginPageContainer.jsx";
import setAuthToken from "../../redux/utils/setAuthToken.js";

function LoginPage() {
	const history = useHistory();
	const dispatch = useDispatch();
	const [formInputs, setFormInputs] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = (e) => {
		setFormInputs({
			...formInputs,
			[e.target.name]: e.target.value,
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		axios
			.post("/api/users/login", formInputs)
			.then((res) => {
				const { token } = res.data;
				localStorage.setItem("jwtToken", token);

				setAuthToken(token);

				const decoded = jwt_decode(token);
				dispatch({
					type: "SET_CURRENT_USER",
					payload: decoded,
				});

				console.log({ decoded });

				axios
					.get(`/api/users/${decoded.id}`)
					.then((userRes) => {
						dispatch({
							type: "SET_USER_DATA",
							payload: userRes.data.user,
						});

						history.push("/home");
					})
					.catch((err) => {
						console.log(err);
						console.log(err.response.data);
					});
			})
			.catch((err) => {
				const { data } = err.response;
				setFormInputs(data.inputs);
				setErrors({
					email: "",
					password: "",
					...data.errors,
				});
			});
	};

	return (
		<LoginPageContainer
			formInputs={formInputs}
			errors={errors}
			handleInputChange={handleInputChange}
			handleFormSubmit={handleFormSubmit}
		/>
	);
}

export default LoginPage;

import React from "react";
import MainHeading from "../../styles/MainHeading.js";
import Form from "../../styles/Form/Form.js";
import FormPage from "../../styles/Form/FormPage.js";
import SubmitButton from "../../styles/Form/SubmitButton.js";
import { InputGroup, Input, InputError } from "../../styles/Form/Input.js";
import SwitchFormsText from "../../styles/Form/SwitchFormsText.js";
import A from "../../styles/A.js";

function LoginPageContainer({
	formInputs,
	errors,
	handleInputChange,
	handleFormSubmit,
}) {
	return (
		<FormPage>
			<MainHeading style={{ marginBottom: "3rem" }}>Login Here</MainHeading>
			<Form onSubmit={handleFormSubmit}>
				<InputGroup>
					<Input
						type="email"
						placeholder="Email"
						name="email"
						value={formInputs.email}
						onChange={handleInputChange}
					/>
					{errors.email ? <InputError>{errors.email}</InputError> : ""}
				</InputGroup>
				<InputGroup>
					<Input
						type="password"
						placeholder="Password"
						name="password"
						value={formInputs.password}
						onChange={handleInputChange}
					/>
					{errors.password ? (
						<InputError>{errors.password}</InputError>
					) : (
						""
					)}
				</InputGroup>
				<A to="/forgot-password">Forgot Password</A>
				<SubmitButton type="submit">Login</SubmitButton>
			</Form>
			<SwitchFormsText>
				Don't have an account ?{" "}
				<A fontSize="inherit" to="/register">
					Register Here
				</A>
			</SwitchFormsText>
			<div style={{ textAlign: "center", marginTop: "2.8rem" }}>
				<A to="/">Go To Home</A>
			</div>
		</FormPage>
	);
}

export default LoginPageContainer;

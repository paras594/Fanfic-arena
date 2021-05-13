import React from "react";
import MainHeading from "../../styles/MainHeading.js";
import Form from "../../styles/Form/Form.js";
import FormPage from "../../styles/Form/FormPage.js";
import SubmitButton from "../../styles/Form/SubmitButton.js";
import { InputGroup, Input, InputError } from "../../styles/Form/Input.js";
import SwitchFormsText from "../../styles/Form/SwitchFormsText.js";
import A from "../../styles/A.js";

function RegisterPageContainer({
	formInputs,
	errors,
	handleInputChange,
	handleFormSubmit,
}) {
	return (
		<FormPage>
			<MainHeading style={{ marginBottom: "3rem" }}>
				Register Here
			</MainHeading>
			{/* <OAuthButtons /> */}
			<Form onSubmit={handleFormSubmit}>
				<InputGroup>
					<Input
						type="text"
						placeholder="Username"
						name="username"
						value={formInputs.username}
						onChange={handleInputChange}
					/>
					{errors.username ? (
						<InputError>{errors.username}</InputError>
					) : (
						""
					)}
				</InputGroup>
				<InputGroup>
					<Input
						type="email"
						placeholder="Email"
						name="email"
						value={formInputs.email}
						onChange={handleInputChange}
					/>
					{/* <InputError>Email already exists</InputError> */}
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
				<InputGroup>
					<Input
						type="password"
						placeholder="Confirm Password"
						name="password2"
						value={formInputs.password2}
						onChange={handleInputChange}
					/>
					{errors.password2 ? (
						<InputError>{errors.password2}</InputError>
					) : (
						""
					)}
				</InputGroup>
				<SubmitButton type="submit">Register</SubmitButton>
			</Form>
			<SwitchFormsText>
				Already have an account ? <A to="/login">Login Here</A>
			</SwitchFormsText>
		</FormPage>
	);
}

export default RegisterPageContainer;

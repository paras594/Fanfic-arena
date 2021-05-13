import React from "react";
import MainHeading from "../../styles/MainHeading.js";
import Form from "../../styles/Form/Form.js";
import FormPage from "../../styles/Form/FormPage.js";
import SubmitButton from "../../styles/Form/SubmitButton.js";
import { InputGroup, Input } from "../../styles/Form/Input.js";

function ForgotPasswordPageContainer({
	email,
	handleEmailChange,
	handleFormSubmit,
}) {
	return (
		<FormPage>
			<MainHeading margin="2rem 0">Forgot Password</MainHeading>
			<Form onSubmit={handleFormSubmit}>
				<InputGroup>
					<Input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={handleEmailChange}
					/>
					{/* <InputError>Email already exists</InputError> */}
				</InputGroup>
				<SubmitButton type="submit">Submit</SubmitButton>
			</Form>
		</FormPage>
	);
}

export default ForgotPasswordPageContainer;

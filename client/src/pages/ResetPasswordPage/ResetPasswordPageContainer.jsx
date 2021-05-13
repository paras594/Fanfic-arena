import React from "react";
import MainHeading from "../../styles/MainHeading.js";
import Form from "../../styles/Form/Form.js";
import FormPage from "../../styles/Form/FormPage.js";
import SubmitButton from "../../styles/Form/SubmitButton.js";
import A from "../../styles/A.js";
import { InputGroup, Input, InputError } from "../../styles/Form/Input.js";

function ResetPasswordPageContainer({ inputs, errors, handleInputChange, handleFormSubmit }) {
	return (
		<FormPage>
			<MainHeading margin="2rem 0">Reset Password</MainHeading>
			<Form onSubmit={handleFormSubmit}>
				<InputGroup>
					<Input
						type="password"
						placeholder="New Password"
						name="password"
						value={inputs.password}
						onChange={handleInputChange}
					/>
					{errors.password ? <InputError>{errors.password}</InputError> : ""}
				</InputGroup>
				<InputGroup>
					<Input
						type="password"
						placeholder="Confirm Password"
						name="password2"
						value={inputs.password2}
						onChange={handleInputChange}
					/>
					{errors.password2 ? <InputError>{errors.password2}</InputError> : ""}
				</InputGroup>
				<A to="/login">Login Now</A>
				<SubmitButton type="submit">Update</SubmitButton>
			</Form>
		</FormPage>
	);
}

export default ResetPasswordPageContainer;

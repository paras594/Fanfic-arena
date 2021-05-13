import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import { Tabs, Tab } from "../../styles/Tabs.js";
import ProfileImgContainer from "../../components/ProfileImg/ProfileImgContainer.jsx";
import Button from "../../styles/Button.js";
import Form from "../../styles/Form/Form.js";
import { InputGroup, Input, InputError } from "../../styles/Form/Input.js";
import { Div, UpdatePasswordTitle } from "./EditProfileStyles.js";
import { UploadBtn } from "../FictionForm/FictionFormStyles.js";

function EditProfileContainer({
	profileInputs,
	preview,
	profileImageRef,
	errors,
	handleChooseImg,
	handleProfileInputChange,
	handleProfileSubmit,
	passwordInputs,
	handlePasswordInputChange,
	handlePasswordSubmit
}) {
	const [activeTab, setActiveTab] = useState(1);

	return (
		<>
			<Navbar />
			<Div>
				<div>
					<Tabs>
						<Tab onClick={() => setActiveTab(1)}>Update Profile</Tab>
						<Tab onClick={() => setActiveTab(2)}>Update Password</Tab>
					</Tabs>
				</div>
				{activeTab === 1 ? (
					<Div>
						<ProfileImgContainer src={preview} />
						<UploadBtn>
							<input type="file" onChange={handleChooseImg} ref={profileImageRef} />
							<Button>Choose Image</Button>
						</UploadBtn>
						<Form my="1.4rem" onSubmit={handleProfileSubmit}>
							<InputGroup>
								<Input
									type="text"
									placeholder="Username"
									name="username"
									value={profileInputs.username}
									onChange={handleProfileInputChange}
								/>
								{errors.username ? <InputError>{errors.username}</InputError> : ""}
							</InputGroup>
							<InputGroup>
								<Input
									type="text"
									placeholder="Full Name"
									name="fullname"
									value={profileInputs.fullname}
									onChange={handleProfileInputChange}
								/>
								{errors.fullname ? <InputError>{errors.fullname}</InputError> : ""}
							</InputGroup>
							<InputGroup>
								<Input
									type="email"
									placeholder="Email"
									name="email"
									value={profileInputs.email}
									onChange={handleProfileInputChange}
								/>
								{errors.email ? <InputError>{errors.email}</InputError> : ""}
							</InputGroup>
							<Button type="submit">Update Profile</Button>
						</Form>
						<Button invert>Delete Account</Button>
					</Div>
				) : (
					<>
						<UpdatePasswordTitle>Update Password</UpdatePasswordTitle>

						<Form my="1.4rem" onSubmit={handlePasswordSubmit}>
							<InputGroup>
								<Input
									type="password"
									placeholder="Current Password"
									name="currentPassword"
									value={passwordInputs.currentPassword}
									onChange={handlePasswordInputChange}
								/>
								{errors.currentPassword ? (
									<InputError>{errors.currentPassword}</InputError>
								) : (
									""
								)}
							</InputGroup>
							<InputGroup>
								<Input
									type="password"
									placeholder="New Password"
									name="newPassword"
									value={passwordInputs.newPassword}
									onChange={handlePasswordInputChange}
								/>
								{errors.newPassword ? <InputError>{errors.newPassword}</InputError> : ""}
							</InputGroup>
							<InputGroup>
								<Input
									type="password"
									placeholder="Confirm New Password"
									name="newPassword2"
									value={passwordInputs.newPassword2}
									onChange={handlePasswordInputChange}
								/>
								{errors.newPassword2 ? <InputError>{errors.newPassword2}</InputError> : ""}
							</InputGroup>
							<Button>Update Profile</Button>
						</Form>
					</>
				)}
			</Div>
		</>
	);
}

export default EditProfileContainer;

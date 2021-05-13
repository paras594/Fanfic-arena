import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import EditProfileContainer from "./EditProfileContainer.jsx";

function EditProfile() {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const { userId } = useParams();
	const history = useHistory();
	const profileImageRef = useRef();
	const [profileInputs, setProfileInputs] = useState({
		username: "",
		fullname: "",
		email: ""
	});
	const [file, setFile] = useState(null);
	const [preview, setPreview] = useState("");
	const [passwordInputs, setPasswordInputs] = useState({
		currentPassword: "",
		newPassword: "",
		newPassword2: ""
	});
	const [errors, setErrors] = useState({
		username: "",
		fullname: "",
		email: "",
		currentPassword: "",
		newPassword: "",
		newPassword2: ""
	});

	useEffect(() => {
		console.log(userId, user._id);
		if (userId !== user._id) {
			return history.push("/unauthorized");
		}
	}, [userId, user._id, history]);

	useEffect(() => {
		setProfileInputs({
			username: user.username,
			fullname: user.fullname,
			email: user.email
		});

		setPreview(user.userImage);
	}, [user.username, user.fullname, user.email, user.userImage]);

	const handleChooseImg = (e) => {
		let selectedFile = e.target.files[0];
		let previewImage = URL.createObjectURL(selectedFile);
		setFile(selectedFile);
		setPreview(previewImage);
	};

	const handleProfileInputChange = (e) => {
		setProfileInputs({
			...profileInputs,
			[e.target.name]: e.target.value
		});
	};

	const handleProfileSubmit = (e) => {
		e.preventDefault();
		console.log("form submitted");

		let formData = new FormData();

		formData.append("selectedFile", file);
		formData.append("username", profileInputs.username);
		formData.append("email", profileInputs.email);
		formData.append("fullname", profileInputs.fullname);

		axios
			.patch("/api/users/profile", formData)
			.then((res) => {
				console.log(res.data);
				dispatch({
					type: "SET_USER_DATA",
					payload: res.data.user
				});

				setPasswordInputs({
					currentPassword: "",
					newPassword: "",
					newPassword2: ""
				});
				setErrors({
					username: "",
					fullname: "",
					email: "",
					currentPassword: "",
					newPassword: "",
					newPassword2: ""
				});
				toast.success("Profile Updated Successfully.");
			})
			.catch((err) => {
				const { data } = err.response;
				console.error(data.message);
				setErrors({
					username: "",
					fullname: "",
					email: "",
					currentPassword: "",
					newPassword: "",
					newPassword2: "",
					...data.errors
				});
			});
	};

	const handlePasswordInputChange = (e) => {
		setPasswordInputs({
			...passwordInputs,
			[e.target.name]: e.target.value
		});
	};

	const handlePasswordSubmit = (e) => {
		e.preventDefault();

		axios
			.patch("/api/users/password", passwordInputs)
			.then((res) => {
				console.log(res.data);
				setPasswordInputs({
					currentPassword: "",
					newPassword: "",
					newPassword2: "",
					...res.data.inputs
				});
				setErrors({
					username: "",
					fullname: "",
					email: "",
					currentPassword: "",
					newPassword: "",
					newPassword2: ""
				});
				toast.success("Profile Updated Successfully.");
			})
			.catch((err) => {
				const { data } = err.response;
				console.error(data.message);
				setErrors({
					username: "",
					fullname: "",
					email: "",
					currentPassword: "",
					newPassword: "",
					newPassword2: "",
					...data.errors
				});
			});
	};

	return (
		<EditProfileContainer
			profileInputs={profileInputs}
			preview={preview}
			profileImageRef={profileImageRef}
			errors={errors}
			handleChooseImg={handleChooseImg}
			handleProfileInputChange={handleProfileInputChange}
			handleProfileSubmit={handleProfileSubmit}
			passwordInputs={passwordInputs}
			handlePasswordInputChange={handlePasswordInputChange}
			handlePasswordSubmit={handlePasswordSubmit}
		/>
	);
}

export default EditProfile;

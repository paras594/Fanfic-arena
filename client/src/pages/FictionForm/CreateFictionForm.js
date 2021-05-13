import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CreateFictionContainer from "./CreateFictionContainer.jsx";
import categories from "../../utils/categories.js";
import previewPlaceholder from "../../images/default-fiction-image.svg";

function CreateFictionForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState(categories[0].name);
	const [mdeValue, setMdeValue] = useState("");
	const [file, setFile] = useState(null);
	const [preview, setPreview] = useState(previewPlaceholder);
	const [errors, setErrors] = useState({
		title: "",
		description: "",
		category: "",
		body: ""
	});
	const fictionImageRef = useRef();

	const handleTitleChange = (e) => setTitle(e.target.value);
	const handleDescriptionChange = (e) => setDescription(e.target.value);
	const handleCategoryChange = (e) => setCategory(e.target.value);
	const handleMdeChange = (val) => setMdeValue(val);
	const handleChooseImg = (e) => {
		let selectedFile = e.target.files[0];
		let previewImage = URL.createObjectURL(selectedFile);
		setFile(selectedFile);
		setPreview(previewImage);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		let formData = new FormData();

		formData.append("selectedFile", file);
		formData.append("title", title);
		formData.append("description", description);
		formData.append("category", category);
		formData.append("body", mdeValue);

		axios
			.post("/api/fictions/", formData)
			.then((res) => {
				setTitle("");
				setDescription("");
				setCategory(categories[0]);
				setMdeValue("");
				setFile(null);
				setPreview(previewPlaceholder);
				fictionImageRef.current.value = "";
				toast.success("Fiction Created Successfully.");
			})
			.catch((err) => {
				const { data } = err.response;
				const { inputs, errors } = data;
				console.log(err.response.data);
				setTitle(inputs.title);
				setDescription(inputs.description);
				setCategory(inputs.category);
				setMdeValue(inputs.body);
				setErrors({
					title: "",
					description: "",
					category: "",
					body: "",
					...errors
				});
			});
	};

	return (
		<CreateFictionContainer
			title={title}
			description={description}
			category={category}
			mdeValue={mdeValue}
			preview={preview}
			fictionImageRef={fictionImageRef}
			errors={errors}
			handleTitleChange={handleTitleChange}
			handleDescriptionChange={handleDescriptionChange}
			handleCategoryChange={handleCategoryChange}
			handleMdeChange={handleMdeChange}
			handleChooseImg={handleChooseImg}
			handleFormSubmit={handleFormSubmit}
		/>
	);
}

export default CreateFictionForm;

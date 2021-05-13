import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import EditFictionContainer from "./EditFictionContainer.jsx";

function EditFictionForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [mdeValue, setMdeValue] = useState("");
	const [file, setFile] = useState(null);
	const [preview, setPreview] = useState("");
	const { fictionId } = useParams();
	const [imageChanged, setImageChanged] = useState(false);

	useEffect(() => {
		axios.get(`/api/fictions/${fictionId}`).then((res) => {
			let fic = res.data.fiction;
			console.log(fic);

			setTitle(fic.title);
			setDescription(fic.description);
			setCategory(fic.category);
			setMdeValue(fic.body);
			setPreview(fic.image);
			setFile(fic.image);
		});
	}, [fictionId]);

	// handlers
	const handleTitleChange = (e) => setTitle(e.target.value);
	const handleDescriptionChange = (e) => setDescription(e.target.value);
	const handleCategoryChange = (e) => setCategory(e.target.value);
	const handleMdeChange = (val) => setMdeValue(val);

	const handleChooseImg = (e) => {
		let selectedFile = e.target.files[0];
		let previewImage = URL.createObjectURL(selectedFile);
		setFile(selectedFile);
		setPreview(previewImage);
		setImageChanged(true);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(file);
		console.log("form submitted");

		let formData = new FormData();
		console.log("imageChanged:", imageChanged);

		formData.append("imageChanged", imageChanged);
		formData.append("selectedFile", file);
		formData.append("title", title);
		formData.append("description", description);
		formData.append("category", category);
		formData.append("body", mdeValue);

		axios
			.patch(`/api/fictions/${fictionId}`, formData)
			.then((res) => {
				console.log(res.data);
				toast.success("Fiction Updated Successfully");
			})
			.catch((err) => {
				const { data } = err.response;
				console.error(data.message);
			});
	};

	return (
		<EditFictionContainer
			title={title}
			description={description}
			category={category}
			mdeValue={mdeValue}
			preview={preview}
			handleTitleChange={handleTitleChange}
			handleDescriptionChange={handleDescriptionChange}
			handleCategoryChange={handleCategoryChange}
			handleMdeChange={handleMdeChange}
			handleChooseImg={handleChooseImg}
			handleFormSubmit={handleFormSubmit}
		/>
	);
}

export default EditFictionForm;

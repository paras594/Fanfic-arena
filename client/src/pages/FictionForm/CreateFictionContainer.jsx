import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import FooterContainer from "../../components/Footer/FooterContainer.jsx";
import Wrapper from "../../styles/Wrapper.js";
import MainHeading from "../../styles/MainHeading.js";
import Button from "../../styles/Button.js";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Input } from "../../styles/Form/Input.js";
import categories from "../../utils/categories.js";
import {
	Div,
	Form,
	FictionDetails,
	FictionInputs,
	FictionImg,
	SelectBtn,
	ChooseImg,
	UploadBtn,
} from "./FictionFormStyles.js";

function CreateFictionContainer({
	title,
	description,
	category,
	mdeValue,
	preview,
	fictionImageRef,
	handleTitleChange,
	handleDescriptionChange,
	handleCategoryChange,
	handleMdeChange,
	handleChooseImg,
	handleFormSubmit,
}) {
	return (
		<Div>
			<Navbar />
			<Wrapper py="1rem">
				<MainHeading>Write Fiction</MainHeading>
				<Form onSubmit={handleFormSubmit}>
					<FictionDetails>
						<ChooseImg>
							<FictionImg>
								<img src={preview} alt="fiction" />
							</FictionImg>
							<UploadBtn>
								<input
									type="file"
									onChange={handleChooseImg}
									ref={fictionImageRef}
								/>
								<Button>Choose Image</Button>
							</UploadBtn>
						</ChooseImg>
						<FictionInputs>
							<div className="inputs">
								<Input
									type="text"
									placeholder="Title"
									name="title"
									value={title}
									onChange={handleTitleChange}
								/>
								<SelectBtn
									name="category"
									value={category.name}
									onChange={handleCategoryChange}
								>
									{categories.map((cat, i) => (
										<option key={i} value={cat.name}>
											{cat.name}
										</option>
									))}
								</SelectBtn>
							</div>
							<div className="textarea">
								<textarea
									placeholder="Description"
									name="description"
									value={description}
									onChange={handleDescriptionChange}
								/>
							</div>
						</FictionInputs>
					</FictionDetails>
					<div>
						<SimpleMDE onChange={handleMdeChange} value={mdeValue} />
					</div>
					<Button type="submit">Submit</Button>
				</Form>
			</Wrapper>
			<FooterContainer />
		</Div>
	);
}

export default CreateFictionContainer;

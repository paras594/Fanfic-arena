import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import writerImg from "../../../images/writer-img.svg";
import {
	Div,
	IndexGrid,
	IndexText,
	IndexImg,
	IndexButtons,
	IndexButton,
} from "./IndexHeaderStyles.js";

function IndexHeaderContainer() {
	const { isAuthenticated } = useSelector((state) => state.auth);
	const history = useHistory();

	const handleWriteFiction = () => {
		if (!isAuthenticated) {
			return toast.info("Login Required !");
		}

		history.push("/create-fiction");
	};

	const handleExploreFictions = () => {
		history.push(`/categories/Popular Fictions`);
	};

	return (
		<Div>
			<IndexGrid>
				<IndexText>
					<h1>
						WELCOME TO <br /> FAN FICTION ARENA
					</h1>
					<p>
						A new place to read and write your fictions. Start exploring
						now.
					</p>
				</IndexText>
				<IndexImg>
					<img src={writerImg} alt="" />
				</IndexImg>
				<IndexButtons>
					<IndexButton invert onClick={handleWriteFiction}>
						Start Writing
					</IndexButton>
					<IndexButton onClick={handleExploreFictions}>
						Explore Fictions
					</IndexButton>
				</IndexButtons>
			</IndexGrid>
		</Div>
	);
}

export default IndexHeaderContainer;

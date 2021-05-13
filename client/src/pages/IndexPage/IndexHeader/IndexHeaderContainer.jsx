import React from "react";
import { toast } from "react-toastify";
import writerImg from "../../../images/writer-img.svg";
import {
	Div,
	IndexGrid,
	IndexText,
	IndexImg,
	IndexButtons,
	IndexButton
} from "./IndexHeaderStyles.js";

function IndexHeaderContainer() {
	const handleClick = () => {
		toast("Notification !!");
	};

	return (
		<Div>
			<IndexGrid>
				<IndexText>
					<h1>
						WELCOME TO <br /> FAN FICTION ARENA
					</h1>
					<p>A new place to read and write your fictions. Start exploring now.</p>
				</IndexText>
				<IndexImg>
					<img src={writerImg} alt="" />
				</IndexImg>
				<IndexButtons>
					<IndexButton invert onClick={handleClick}>
						Start Writing
					</IndexButton>
					<IndexButton>Explore Fictions</IndexButton>
				</IndexButtons>
			</IndexGrid>
		</Div>
	);
}

export default IndexHeaderContainer;

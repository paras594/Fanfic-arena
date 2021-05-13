import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar.js";
import Wrapper from "../../styles/Wrapper.js";
import FictionCard from "../../components/FictionCard/FictionCard.js";
import Button from "../../styles/Button.js";
import { Buttons, CreatedAt, Description, ContentBox, Content } from "./FanficPageStyles.js";
import FanficComments from "./FanficComments/FanficComments.js";
import FooterContainer from "../../components/Footer/FooterContainer.jsx";
import moment from "moment";

function FanficPageContainer({
	fiction,
	saved,
	handleEditClick,
	handleDeleteClick,
	handleSaveClick,
	handleUnsaveClick
}) {
	const { user } = useSelector((state) => state.auth);
	console.log("fiction:", fiction);
	let date = moment(fiction.createdAt);

	return (
		<>
			<Navbar />
			<Wrapper pt="1.8rem">
				<FictionCard data={fiction} full category />
				<CreatedAt>
					Created at: <span className="date">{date.format("Do MMM, YYYY")}</span>
				</CreatedAt>
				<Description>{fiction.description}</Description>
				{fiction.userId._id === user.id ? (
					<Buttons>
						<Button mr="0.8rem" onClick={handleEditClick}>
							Edit
						</Button>
						<Button onClick={handleDeleteClick}>Delete</Button>
					</Buttons>
				) : (
					<Buttons>
						{saved ? (
							<Button mr="0.8rem" onClick={handleUnsaveClick}>
								Saved
							</Button>
						) : (
							<Button mr="0.8rem" onClick={handleSaveClick}>
								Save
							</Button>
						)}
					</Buttons>
				)}
				<ContentBox>
					<Content>
						{fiction.body.split("\n").map((para, i) => (
							<div key={i}>
								<p>{para}</p>
								<br />
							</div>
						))}
					</Content>
				</ContentBox>
				<FanficComments comments={fiction.comments} fictionId={fiction._id} />
			</Wrapper>
			<FooterContainer />
		</>
	);
}

export default FanficPageContainer;

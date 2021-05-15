import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import FanficPageContainer from "./FanficPageContainer.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";

function FanficPage() {
	const { user, isAuthenticated } = useSelector((state) => state.auth);
	const [fiction, setFiction] = useState({});
	const params = useParams();
	const { fictionId } = params;
	const [saved, setSaved] = useState(false);
	const history = useHistory();

	useEffect(() => {
		axios.get(`/api/fictions/${fictionId}`).then((res) => {
			let fic = res.data.fiction;
			setFiction(fic);
		});

		// if not auth, then don't fetch saved fictions
		if (!isAuthenticated) return;
		axios.get(`/api/users/${user.id}/savedFictions`).then((res) => {
			const savedFictions = res.data.savedFictions;
			console.log(savedFictions);
			const isSaved = savedFictions.includes(fictionId);

			setSaved(isSaved);
		});
	}, [fictionId, user.id, isAuthenticated]);

	const handleDeleteClick = (e) => {
		console.log("deleting...");
		if (!isAuthenticated) {
			return toast.info("Login Required !");
		}
		axios
			.delete(`/api/fictions/${fictionId}`)
			.then((res) => {
				console.log(res.data.message);
				history.goBack();
			})
			.catch((err) => {
				console.log(err.response.data.message);
			});
	};

	const handleEditClick = (e) => {
		if (!isAuthenticated) {
			return toast.info("Login Required !");
		}
		history.push(`/fiction/${fictionId}/edit`);
	};

	const handleSaveClick = (e) => {
		if (!isAuthenticated) {
			return toast.info("Login Required !");
		}
		axios.post(`/api/fictions/${fictionId}/save`).then((res) => {
			setSaved(true);
		});
	};

	const handleUnsaveClick = (e) => {
		if (!isAuthenticated) {
			return toast.info("Login Required !");
		}
		axios.post(`/api/fictions/${fictionId}/unsave`).then((res) => {
			setSaved(false);
		});
	};

	return Object.keys(fiction).length ? (
		<FanficPageContainer
			fiction={fiction}
			saved={saved}
			handleDeleteClick={handleDeleteClick}
			handleEditClick={handleEditClick}
			handleSaveClick={handleSaveClick}
			handleUnsaveClick={handleUnsaveClick}
		/>
	) : (
		<Loader />
	);
}

export default FanficPage;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "./styles/globalStyles.js";
import IndexPage from "./pages/IndexPage/IndexPage.js";
import RegisterPage from "./pages/RegisterPage/RegisterPage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage.js";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage.js";
import Homepage from "./pages/Homepage/Homepage.js";
import ProfilePage from "./pages/ProfilePage/ProfilePage.js";
import EditProfile from "./pages/EditProfile/EditProfile.js";
import FanficPage from "./pages/FanficPage/FanficPage.js";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage.js";
import CategoryResultsPage from "./pages/CategoryResultsPage/CategoryResultsPage.js";
import SearchPage from "./pages/SearchPage/SearchPage.js";
import ConnectionsPage from "./pages/ConnectionsPage/ConnectionsPage.js";
import CreateFictionForm from "./pages/FictionForm/CreateFictionForm.js";
import EditFictionForm from "./pages/FictionForm/EditFictionForm.js";
import PrivateRoute from "./utils/PrivateRoute.js";
import Loader from "./components/Loader/Loader.js";
import setAuthToken from "./redux/utils/setAuthToken.js";
import { logoutUser, setCurrentUser } from "./redux/actions/authActions.js";
import axios from "axios";
import keys from "./keys.js";

axios.defaults.baseURL = keys.apiEndpoint;

function App() {
	const dispatch = useDispatch();

	if (localStorage.jwtToken) {
		const token = localStorage.jwtToken;
		setAuthToken(token);

		// decode jwt token
		const decoded = jwt_decode(token);

		dispatch(setCurrentUser(decoded));

		const currentTime = Date.now() / 1000;
		if (decoded.exp < currentTime) {
			dispatch(logoutUser());

			window.location.href = "/login";
		}
	}

	useEffect(() => {
		axios
			.get("/api/test")
			.then((res) => console.log({ data: res.data }))
			.catch((err) => console.log({ err: err.response }));
	}, []);

	return (
		<Router>
			<ToastContainer />
			<GlobalStyles />
			<Switch>
				<Route exact path="/">
					<IndexPage />
				</Route>
				<Route path="/loader">
					<Loader />
				</Route>
				<Route path="/register">
					<RegisterPage />
				</Route>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/forgot-password">
					<ForgotPasswordPage />
				</Route>
				<Route path="/reset/:resetId">
					<ResetPasswordPage />
				</Route>
				<PrivateRoute path="/home" component={Homepage} />
				<PrivateRoute
					path="/profile/:userId/edit"
					component={EditProfile}
				/>
				<Route exact path="/profile/:userId">
					<ProfilePage />
				</Route>
				<Route exact path="/fiction/:fictionId">
					<FanficPage />
				</Route>
				<PrivateRoute
					path="/fiction/:fictionId/edit"
					component={EditFictionForm}
				/>
				<Route exact path="/categories">
					<CategoriesPage />
				</Route>
				<Route path="/categories/:category">
					<CategoryResultsPage />
				</Route>
				<Route path="/search">
					<SearchPage />
				</Route>
				<PrivateRoute
					path="/profile/:userId/connections"
					component={ConnectionsPage}
				/>
				<Route path="/connections">
					<ConnectionsPage />
				</Route>
				<PrivateRoute
					path="/create-fiction"
					component={CreateFictionForm}
				/>
				<Route path="/unauthorized">
					<h1>Unauthorized</h1>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

import React from "react";
import { useSelector } from "react-redux";

import NavbarContainer from "./NavbarContainer.jsx";

function Navbar() {
	const { isAuthenticated, user } = useSelector((state) => state.auth);

	return <NavbarContainer isAuth={isAuthenticated} user={user} />;
}

export default Navbar;

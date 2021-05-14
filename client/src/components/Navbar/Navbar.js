import React from "react";
import { useSelector } from "react-redux";

import NavbarContainer from "./NavbarContainer.jsx";

function Navbar() {
	const { isAuthenticated } = useSelector((state) => state.auth);
	const { user } = useSelector((state) => state.user);

	return <NavbarContainer isAuth={isAuthenticated} user={user} />;
}

export default Navbar;

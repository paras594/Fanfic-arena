import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import {
	Nav,
	NavWrapper,
	NavToggleBtn,
	NavToggleMenu,
	NavLinks,
	NavSearch,
	NavButtons,
	NavButton,
	NavProfileBtn,
	NavProfileImg,
	NavProfileMenu,
} from "./NavbarStyles.js";

import Search from "../Search/Search.js";
import LogoContainer from "../Logo/LogoContainer.jsx";

function NavbarContainer({ isAuth, user }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
	const history = useHistory();

	const handleToggle = (e) => {
		setMenuOpen(!menuOpen);
	};

	const handleLoginClick = () => {
		history.push("/login");
	};

	const handleRegisterClick = () => {
		history.push("/register");
	};

	const handleWriteFiction = () => {
		history.push("/create-fiction");
	};

	const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

	return (
		<Nav>
			<NavWrapper>
				<NavToggleBtn onClick={handleToggle}>
					<GoThreeBars />
				</NavToggleBtn>
				<NavToggleMenu open={menuOpen} big={isAuth}>
					<Link to={isAuth ? "/home" : "/"}>Home</Link>
					<Link to="/categories">Categories</Link>
					{isAuth && <Link to={`/profile/${user.id}`}>My Fictions</Link>}
					<NavButton onClick={handleLoginClick}>Login</NavButton>
					<NavButton onClick={handleRegisterClick}>Register</NavButton>
				</NavToggleMenu>
				<LogoContainer fontSize="1rem" goTo={isAuth ? "/home" : "/"} />
				<NavLinks>
					<Link to={isAuth ? "/home" : "/"}>Home</Link>
					<Link to="/categories">Categories</Link>
					{isAuth && <Link to={`/profile/${user.id}`}>My Fictions</Link>}
				</NavLinks>
				<NavSearch>
					<Search />
				</NavSearch>
				<NavButtons>
					{isAuth ? (
						<>
							<NavButton onClick={handleWriteFiction}>
								Write Fiction
							</NavButton>
							<NavProfileBtn onClick={toggleProfileMenu}>
								<NavProfileImg src={user.userImage} alt="profile pic" />
								<NavProfileMenu open={isProfileMenuOpen}>
									<Link to={`/profile/${user.id}`}>Profile</Link>
									<p onClick={() => console.log("clicked")}>Logout</p>
								</NavProfileMenu>
							</NavProfileBtn>
						</>
					) : (
						<>
							<NavButton onClick={handleLoginClick}>Login</NavButton>
							<NavButton onClick={handleRegisterClick}>
								Register
							</NavButton>
						</>
					)}
				</NavButtons>
			</NavWrapper>
		</Nav>
	);
}

export default NavbarContainer;

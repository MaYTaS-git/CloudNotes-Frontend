import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
	let location = useLocation().pathname;
	let navigate = useNavigate();

	const [theme, setTheme] = useState("light");

	const handleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			document.body.setAttribute("data-bs-theme", "dark");
		} else {
			setTheme("light");
			document.body.setAttribute("data-bs-theme", "light");
		}
	};
	const handleLogOut = () => {
		localStorage.removeItem("authToken");
		navigate("/signin");
	};

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-body">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<Link
					className="navbar-brand"
					style={{ border: "none", backgroundColor: "transparent" }}
					to="/"
				>
					CloudNotes
				</Link>

				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav">
						<Link
							className={`nav-link ${
								location === "/" ? "active" : ""
							}`}
							to="/"
						>
							Home
						</Link>
						<Link
							className={`nav-link ${
								location === "/about" ? "active" : ""
							}`}
							to="/about"
						>
							About
						</Link>
						{!localStorage.getItem("authToken") ? (
							<Link
								className={`nav-link ${
									location === "/signup" ? "active" : ""
								}`}
								to="/signup"
							>
								SignUp
							</Link>
						) : (
							<button onClick={handleLogOut} className="nav-link">
								SignOut
							</button>
						)}
						{!localStorage.getItem("authToken") ? (
							<Link
								className={`nav-link ${
									location === "/signin" ? "active" : ""
								}`}
								to="/signin"
							>
								SignIn
							</Link>
						) : (
							""
						)}
					</div>
				</div>
				<div>
					<div onClick={handleTheme}>
						{theme === "light" ? (
							<i role="button" className="fa-regular fa-sun"></i>
						) : (
							<i role="button" className="fa-solid fa-moon"></i>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}

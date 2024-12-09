import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AlertCtx from "../Contexts/CtxAlert/AlertCtx";

const Signin = () => {
	const host = "http://localhost:1111";
	const { showAlert } = useContext(AlertCtx);
	const [creds, setCreds] = useState({ email: "", password: "" });
	let navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (creds.password.length < 5) {
			showAlert("danger", "Error: Invalid credentials.");
			return;
		}

		// backend
		const response = await fetch(`${host}/api/auth/signin`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: creds.email,
				password: creds.password,
			}),
		});
		const json = await response.json();
		if (json.status) {
			// save auth token
			localStorage.setItem("authToken", json.authToken);
			showAlert("success", "Signed-In successfully.");
			navigate("/");
		} else {
			showAlert("danger", "Error: " + json.error);
		}
	};

	const onChange = (event) => {
		setCreds({ ...creds, [event.target.name]: event.target.value });
	};

	return (
		<div className="container mt-4">
			<h1 className="my-2">Sign In to CloudNotes</h1>
			<form className="form-control p-3" onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						aria-describedby="email"
						name="email"
						autoFocus
						required
						autoComplete="email"
						onChange={onChange}
						value={creds.email}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="password"
						name="password"
						required
						onChange={onChange}
						value={creds.password}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Sign In
				</button>
			</form>
		</div>
	);
};

export default Signin;

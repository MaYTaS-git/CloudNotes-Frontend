import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AlertCtx from "../Contexts/CtxAlert/AlertCtx";

const Signup = () => {
	const { showAlert } = useContext(AlertCtx);
	const host = "http://localhost:1111";
	const [creds, setCreds] = useState({
		username: "",
		email: "",
		password: "",
		cpassword: "",
	});
	let navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		// frontend validation
		if (creds.password !== creds.cpassword) {
			showAlert("danger", "Error: Password mismatch.");
			return;
		}
		// backend
		const response = await fetch(`${host}/api/auth/Signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: creds.username,
				email: creds.email,
				password: creds.password,
			}),
		});
		const json = await response.json();
		if (json.status) {
			// save auth token
			localStorage.setItem("authToken", json.authToken);
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
			<h1 className="my-2">Sign Up to CloudNotes</h1>
			<form className="form-control p-3" onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="username" className="form-label">
						Username
					</label>
					<input
						id="username"
						name="username"
						type="text"
						placeholder="Username"
						aria-describedby="username"
						className="form-control"
						autoFocus
						required
						minLength={3}
						onChange={onChange}
						value={creds.username}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email address
					</label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Email address"
						aria-describedby="email"
						className="form-control"
						required
						onChange={onChange}
						value={creds.email}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						id="password"
						name="password"
						type="password"
						placeholder="Password"
						aria-describedby="password"
						className="form-control"
						required
						minLength={5}
						onChange={onChange}
						value={creds.password}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="cpassword" className="form-label">
						Confirm Password
					</label>
					<input
						id="cpassword"
						name="cpassword"
						type="password"
						placeholder="Confirm password"
						className="form-control"
						aria-describedby="confirm password"
						required
						minLength={5}
						onChange={onChange}
						value={creds.cpassword}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default Signup;

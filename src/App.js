import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlertState from "./Contexts/CtxAlert/AlertState";

function App() {
	return (
		<AlertState>
			<Router>
				<Navbar />
				<Alert />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route exact path="/signin" element={<Signin />} />
				</Routes>
				<Footer />
			</Router>
		</AlertState>
	);
}

export default App;

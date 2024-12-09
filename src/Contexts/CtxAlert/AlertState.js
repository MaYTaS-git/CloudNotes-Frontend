import { useState, useRef, useEffect } from "react";
import alertContext from "./AlertCtx";

const AlertState = (props) => {
	const [alert, setAlert] = useState(null);
	const timeoutRef = useRef(null);

	const showAlert = (type, message, duration = 3000) => {
		setAlert({
			msg: message,
			type: type,
		});

		// Clear the existing timeout if there's a pending one
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		// Set a new timeout to clear the alert after 2 seconds
		timeoutRef.current = setTimeout(() => {
			setAlert(null);
		}, duration);
	};
	useEffect(() => {
		return () => clearTimeout(timeoutRef.current); // Clear timeout on component unmount to prevent memory leaks
	}, []);

	return (
		<alertContext.Provider value={{ alert, showAlert }}>
			{props.children}
		</alertContext.Provider>
	);
};

export default AlertState;

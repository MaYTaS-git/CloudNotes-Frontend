import React, { useContext } from "react";
import alertContext from "../Contexts/CtxAlert/AlertCtx";

export default function Alert() {
	const alertCtx = useContext(alertContext);

	return (
		<div style={{ height: "40px" }} className="my-2 mx-1">
			{alertCtx.alert && (
				<div
					className={`alert alert-${alertCtx.alert.type} alert-dismissible py-2 fade show`}
					role="alert"
				>
					<strong>{alertCtx.alert.msg}</strong>
				</div>
			)}
		</div>
	);
}

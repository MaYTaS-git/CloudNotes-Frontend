import React from "react";
import ManipulateNote from "./ManipulateNote";
import NoteState from "../Contexts/CtxNotes/NoteState";

export default function Home() {
	return (
		<>
			<NoteState>
				<div className="container">
					<ManipulateNote />
				</div>
			</NoteState>
		</>
	);
}

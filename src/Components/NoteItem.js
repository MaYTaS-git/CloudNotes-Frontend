import React, { useContext } from "react";
import noteCtx from "../Contexts/CtxNotes/NoteCtx";

const NoteItem = (props) => {
	const { delNote } = useContext(noteCtx);

	let note = props.note;
	let { title, description, _id } = note;

	const onDelete = () => {
		delNote(_id);
	};
	const onUpdate = () => {
		props.updateNote(note);
	};

	return (
		<div className="card col-md-3 mx-2 my-2">
			<div className="card-body">
				<div className="d-flex align-items-center justify-content-end">
					<h5 className="card-title form-control">{title}</h5>
					<div
						role="button"
						className="mx-2 fa-solid fa-pen-to-square"
						onClick={onUpdate}
					></div>
					<div
						role="button"
						className="mx-0 fa-solid fa-trash"
						onClick={onDelete}
					></div>
				</div>
				<p className="card-text">
					{description.length > 140
						? description.slice(0, 137) + "..."
						: description}
				</p>
			</div>
		</div>
	);
};

export default NoteItem;

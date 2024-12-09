import React, { useState, useContext } from "react";
import noteCtx from "../Contexts/CtxNotes/NoteCtx";

const AddNote = () => {
	const { addNote } = useContext(noteCtx);
	const [newNote, setNewNote] = useState({
		title: "",
		description: "",
		tag: "",
	});

	const onChange = (event) => {
		setNewNote({ ...newNote, [event.target.name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		addNote(newNote.title, newNote.description, newNote.tag);
		setNewNote({
			title: "",
			description: "",
			tag: "",
		});
	};

	return (
		<div className="container">
			<form onSubmit={onSubmit}>
				<h1>Create note</h1>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						id="title"
						aria-describedby="title"
						placeholder="Enter title here"
						required
						minLength={3}
						value={newNote.title}
						onChange={onChange}
						name="title"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<textarea
						minLength={5}
						type="text"
						value={newNote.description}
						className="form-control"
						id="description"
						aria-describedby="description"
						placeholder="Enter description here"
						draggable={false}
						rows={4}
						required
						onChange={onChange}
						name="description"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="tag" className="form-label">
						Tag
					</label>
					<input
						type="text"
						value={newNote.tag}
						className="form-control"
						id="tag"
						aria-describedby="tag"
						placeholder="Enter tag here"
						onChange={onChange}
						name="tag"
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Create
				</button>
			</form>
		</div>
	);
};

export default AddNote;

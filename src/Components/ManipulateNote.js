import { useContext, useEffect, useState, useRef } from "react";
import noteContext from "../Contexts/CtxNotes/NoteCtx";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const ManipulateNote = () => {
	const { notes, getNotes, editNote } = useContext(noteContext);

	const ref = useRef(null);
	const refClose = useRef(null);
	let navigate = useNavigate();

	const [eNote, setENote] = useState({
		id: "",
		etitle: "",
		edescription: "",
		etag: "",
	});

	const onChange = (event) => {
		setENote({ ...eNote, [event.target.name]: event.target.value });
	};

	const onClick = (e) => {
		editNote(eNote.id, eNote.etitle, eNote.edescription, eNote.etag);
		refClose.current.click();
	};

	const updateNote = (Note) => {
		ref.current.click();
		setENote({
			id: Note._id,
			etitle: Note.title,
			edescription: Note.description,
			etag: Note.tag,
		});
	};

	// fetch notes to the client side
	useEffect(() => {
		if (localStorage.getItem("authToken")) {
			getNotes();
		} else {
			navigate("/signin");
		}
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<AddNote />
			<button
				type="button"
				className="d-none btn btn-primary"
				ref={ref}
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
			>
				Launch
			</button>
			<div
				className="modal fade"
				tabIndex="-1"
				id="exampleModal"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Edit Note
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="close"
							></button>
						</div>
						<div className="modal-body">
							<form
								onSubmit={(event) => {
									event.preventDefault();
								}}
							>
								<h1>Create note</h1>
								<div className="mb-3">
									<label
										htmlFor="etitle"
										className="form-label"
									>
										Title
									</label>
									<input
										type="text"
										className="form-control"
										id="etitle"
										value={eNote.etitle}
										aria-describedby="etitle"
										placeholder="Edit title"
										required
										minLength={3}
										onChange={onChange}
										name="etitle"
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="edescription"
										className="form-label"
									>
										Description
									</label>
									<textarea
										minLength={5}
										type="text"
										value={eNote.edescription}
										className="form-control"
										id="edescription"
										aria-describedby="edescription"
										placeholder="Edit description"
										draggable={false}
										rows={4}
										required
										onChange={onChange}
										name="edescription"
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="etag"
										className="form-label"
									>
										Tag
									</label>
									<input
										type="text"
										value={eNote.etag}
										className="form-control"
										id="etag"
										aria-describedby="etag"
										placeholder="Edit tag"
										onChange={onChange}
										name="etag"
										required
									/>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								ref={refClose}
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Cancel
							</button>
							<button
								disabled={
									eNote.etitle.length < 3 ||
									eNote.edescription.length < 5
								}
								type="button"
								onClick={onClick}
								className="btn btn-primary"
							>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="container my-3">
				<h1 style={{ fontSize: "1.6rem" }}>Your notes</h1>
				<div className="row d-flex justify-content-center">
					{notes.length === 0 && (
						<div style={{ fontSize: "1rem" }} className="px-4">
							No notes to display.
						</div>
					)}
					{notes.length > 0 &&
						notes.map((note) => {
							return (
								<NoteItem
									key={note._id}
									updateNote={updateNote}
									note={note}
								/>
							);
						})}
				</div>
			</div>
		</>
	);
};

export default ManipulateNote;

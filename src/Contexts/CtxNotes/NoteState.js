import React, { useState, useContext } from "react";
import noteCtx from "./NoteCtx";
import AlertCtx from "../CtxAlert/AlertCtx";

const NoteState = (props) => {
	const host = "http://localhost:1111";
	const [notes, setNotes] = useState([]);
	const { showAlert } = useContext(AlertCtx);

	// fx; get all notes.
	const getNotes = async () => {
		// backend
		const response = await fetch(`${host}/api/storage/fetchall`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("authToken"),
			},
		});
		let json = await response.json();
		if (json.status) {
			setNotes(json.storageVar);
		} else {
			showAlert("danger", "Error: Internal server error.", 5000);
		}
	};

	// fx; add a new note.
	const addNote = async (title, description, tag) => {
		// backend
		const response = await fetch(`${host}/api/storage/add`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("authToken"),
			},
			body: JSON.stringify({ title, description, tag }),
		});
		let json = await response.json();

		// Client side
		if (json.status) {
			let newNote = json.storageVar;
			setNotes(notes.concat(newNote));
			showAlert("info", "New note added successfully.");
		} else {
			showAlert("danger", "Error: Internal server error.");
		}
	};

	// fx; delete a note.
	const delNote = async (id) => {
		// backend
		const response = await fetch(`${host}/api/storage/delete/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("authToken"),
			},
		});
		let json = await response.json();

		// client side
		if (json.status) {
			let newNotes = notes.filter((note) => {
				return note._id !== id;
			});
			setNotes(newNotes);
			showAlert("info", "Note deleted successfully.");
		} else {
			showAlert("danger", "Error: Internal server error.");
		}
	};

	// fx; edit a note.
	const editNote = async (id, title, description, tag) => {
		// backend
		const response = await fetch(`${host}/api/storage/update/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("authToken"),
			},
			body: JSON.stringify({ title, description, tag }),
		});
		let json = await response.json();

		// Client side
		if (json.status) {
			let newNotes = JSON.parse(JSON.stringify(notes));
			for (let note of newNotes) {
				if (note._id === id) {
					note.title = title;
					note.description = description;
					note.tag = tag;

					setNotes(newNotes);
					break;
				}
			}
			showAlert("info", "Note updated successfully.");
		} else {
			showAlert("danger", "Error: Internal server error.");
		}
	};

	return (
		<noteCtx.Provider
			value={{ notes, addNote, delNote, editNote, getNotes }}
		>
			{props.children}
		</noteCtx.Provider>
	);
};

export default NoteState;

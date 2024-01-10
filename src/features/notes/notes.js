import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addNote, removeNote, selectNotes } from "./notesSlice";


export default function Notes(props) {
    const [note, setNote] = useState('')
    const dispatch = useDispatch();
    const notes = useSelector(selectNotes) || [];
    const filteredNotes = notes.filter((note) => note.parentArticle === props.id)

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(addNote({
            id: generateUniqueId(),
            comment: note,
            parentArticle: props.id,
        }));
        setNote('')
    };

    const onRemoveNoteHandler = (note) => {
        dispatch(removeNote(note));
    };

    const generateUniqueId = () => {
        return Date.now().toString();
    };


    return (
        <div>
            {filteredNotes.map((note) => (
                <div className="commentDiv" key={note.id}>
                    <p>{note.comment}</p>
                    <i className="fa-sharp fa-solid fa-xmark" onClick={() => onRemoveNoteHandler(note)}></i>
                </div>
            ))}
            <form onSubmit={onSubmitHandler}>
                <label>New Note:</label>
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)}></input>
                <button type="submit">Add note</button>
            </form>
        </div>
    )
}

import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addNote, removeNote } from "./notesSlice";

export default function Notes(props) {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState('');
    const dispatch = useDispatch();
    // Retrieve data from localStorage
    const storedNotesString = localStorage.getItem('localStorageNotes');
    if (storedNotesString) {
    // Retrieve existing data from local storage
    var parsedData = JSON.parse(storedNotesString);
    } else {
        parsedData = [];
    }

    // Add the notes to the Front end
    useEffect(() => {
        parsedData = Array.isArray(parsedData) ? parsedData : [];
        if (parsedData && storedNotesString) {
            const filteredNotes = parsedData.filter((note) => note.parentArticle === props.id);
            setNotes(filteredNotes);
        }
    }, [storedNotesString, props.id]);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newNote = {
            id: generateUniqueId(),
            comment: currentNote,
            parentArticle: props.id,
        };

        // Update local storage with the entire array of notes
        if (newNote.comment.trim().length > 0) {        
            localStorage.setItem('localStorageNotes', JSON.stringify([...parsedData, newNote]));

        // Dispatch action to add the note to Redux store
        dispatch(addNote(newNote));

        // Add the new note to the state
        setNotes((prevNotes) => [...prevNotes, newNote]);

        // Clear the input field
        setCurrentNote('');
        }
    };

    const onRemoveNoteHandler = (note) => {
        dispatch(removeNote(note));
        
        // Filter out the article to remove
        const updatedData = parsedData.filter((existingNote) => existingNote.id !== note.id);

        // Set the updated data back to local storage
        localStorage.setItem('localStorageNotes', JSON.stringify(updatedData));
        setNotes(updatedData);
    };

    const generateUniqueId = () => {
        return Date.now().toString();
    };

    return (
        <div className="mt-2">
            {notes.map((note) => (
                <div className="row col-11 mx-auto note bg-gradient my-2" key={note.id}>
                    <p className="col-10 text-start ps-4 py-auto my-1">{note.comment}</p>
                    <i className="fa-sharp fa-solid fa-xmark col-2 my-auto" onClick={() => onRemoveNoteHandler(note)}></i>
                </div>
            ))}
            <form onSubmit={onSubmitHandler}>
                <label className="me-2">New Note:</label>
                <input type="text" value={currentNote} onChange={(e) => setCurrentNote(e.target.value)}></input>
                <button className="btn p-1 note my-2" type="submit">Add note</button>
            </form>
        </div>
    );
}

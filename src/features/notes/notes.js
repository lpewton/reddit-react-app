import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addNote, removeNote } from "./notesSlice";

export default function Notes(props) {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState('');
    const dispatch = useDispatch();

    // Retrieve data from localStorage
    const storedNotesString = localStorage.getItem('2');
    // Retrieve existing data from local storage
    let parsedData = JSON.parse(storedNotesString);

    // Add the notes to the Front end
    useEffect(() => {
        if (Array.isArray(parsedData)) {
            const filteredNotes = [];
            for (const note of parsedData) {
                if (note.parentArticle === props.id) {
                    filteredNotes.push(note)
                }
            }
            if (storedNotesString) {
                // Set the parsed data to the state
                setNotes(filteredNotes);
                console.log(filteredNotes)
            }
        }
    }, [storedNotesString]);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newNote = {
            id: generateUniqueId(),
            comment: currentNote,
            parentArticle: props.id,
        };

        // Add the new note to the state
        setNotes((prevNotes) => [...prevNotes, newNote]);

        // Dispatch action to add the note to Redux store
        dispatch(addNote(newNote));

        // Update local storage with the entire array of notes
        localStorage.setItem('2', JSON.stringify([...parsedData, newNote]));

        // Clear the input field
        setCurrentNote('');
    };

    const onRemoveNoteHandler = (note) => {
        dispatch(removeNote(note));
         // Ensure existingData is an array
         parsedData = Array.isArray(parsedData) ? parsedData : [];

         // Filter out the article to remove
         const updatedData = parsedData.filter((existingNote) => existingNote.id !== note.id);

         // Set the updated data back to local storage
         localStorage.setItem('2', JSON.stringify(updatedData));
         setNotes(updatedData);
    };

    const generateUniqueId = () => {
        return Date.now().toString();
    };

    return (
        <div>
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
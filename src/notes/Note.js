import React, { useContext } from 'react';
import NotesContext from '../context';

export default function Note({ note }) {
  const { dispatch } = useContext(NotesContext);
    function downloadTxtFile() {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('notes').innerText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Note.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  return (
    <div className='note'>
      <p id='notes'>{note.text}</p>
      <div className='btn-container'>
        <button
          onClick={() => dispatch({ type: 'SET_CURRENT_NOTE', payload: note })}
          className='edit'
        >
          Edit
        </button>
        <button
          onClick={() => dispatch({ type: 'DELETE_NOTE', payload: note.id })}
          className='delete'
        >
          Delete
        </button>

        <button onClick={downloadTxtFile}>Download txt</button>
      </div>
    </div>
  );
}

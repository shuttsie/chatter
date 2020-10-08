import React, { useContext, useReducer } from 'react';

import AddNote from '../notes/AddNote';
import NoteList from '../notes/NoteList';
import EditNote from '../notes/EditNote';
import NotesContext from '../context';
import notesReducer from '../reducer';

function Notes() {
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {state.currentNote === null ? (
        <div>
          <AddNote />
          <NoteList />
        </div>
      ) : (
        <EditNote />
      )}
    </NotesContext.Provider>
  );
}

export default Notes;
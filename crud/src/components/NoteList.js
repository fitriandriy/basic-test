import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, deleteFunction }) {
  return (
    <div className="note-list">
      {
        notes.map((note) => (
          <NoteItem 
          key={note.id}
          id={note.id}
          deleteFunction={deleteFunction}
          {...note} />
        ))
      }
    </div>
  );
}

export default NoteList;
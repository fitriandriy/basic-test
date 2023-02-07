import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';

function NoteItem({ title, note, id, deleteFunction }) {
 return (
   <div className="note-item">
     <NoteItemBody title={title} note={note} />
     <DeleteButton id={id} deleteFunction={deleteFunction} />
   </div>
 );
}

export default NoteItem;
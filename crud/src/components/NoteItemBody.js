import React from 'react';

function NoteItemBody({ title, note }) {
 return (
   <div className="note-item__body">
     <h3 className="note-item__title">{title}</h3>
     <p className="note-item__note">{note}</p>
   </div>
 );
}

export default NoteItemBody;
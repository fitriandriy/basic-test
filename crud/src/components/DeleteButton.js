import React from "react";

function DeleteButton({ id, deleteFunction } ) {
    return <button className="note-item__delete" onClick={() => deleteFunction(id)}>X</button>
}

export default DeleteButton;
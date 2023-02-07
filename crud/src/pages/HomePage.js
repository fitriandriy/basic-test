import React from "react";
import NoteList from "../components/NoteList";
import { deleteNote, getNotes } from "../utils/data";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getNotes(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);
    
        this.setState(() => {
            return {
                notes: getNotes(),
            }
        });
    }   
    
    render() {
        return (
            <section>
                <NoteList notes={this.state.notes} deleteFunction={this.onDeleteHandler} />
            </section>
        )
    }
}

export default HomePage;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
 
function NoteApp() {
  return (
    <div className="note-app">
      <header className='note-app__header'>
        <h1>Note List</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}
 
export default NoteApp;

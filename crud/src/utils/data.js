let notes = [
  {
    id: 1,
    title: 'Note 1',
    note: 'lorem ipsum dolor emet',
  },
  {
    id: 2,
    title: 'Note 2',
    note: 'lorem ipsum dolor emet',
  },
  {
    id: 3,
    title: 'Note 3',
    note: 'lorem ipsum dolor emet',
  },
]
 
function getNotes() {
  return notes;
}
 
function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
}
 
export { getNotes, deleteNote };
 
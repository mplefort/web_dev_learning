import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
// import notes from '../notes';

// const notes = [];
// console.log(notes);

function App() {
  const [notes, setNotes] = useState([]);

  function newNoteCallback(newNote) {
    // console.log(newNote);
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function delNoteCallback(id) {
    // console.log(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((item, idx) => {
        return idx !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea newNoteCallback={newNoteCallback} />
      {notes.map((note, idx) => (
        <Note key={idx} id={idx} title={note.title} content={note.content} delNoteCallback={delNoteCallback} />
      ))}
      <Footer />
    </div>
  );
}

export default App;

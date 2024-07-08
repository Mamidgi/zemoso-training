import React, { useContext } from 'react';
import { NotesContext } from '../../context/NotesContext';
import Note from '../molecules/Note';

const NotesList: React.FC = () => {
  const notesContext = useContext(NotesContext);

  if (!notesContext) {
    return null;
  }

  const { notes } = notesContext;

  return (
    <div className="notes-list">
      {notes.map(note => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;

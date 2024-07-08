import React, { useContext } from 'react';
import { NotesContext } from '../../context/NotesContext';

interface NoteProps {
  note: {
    id: string;
    title: string;
    content: string;
  };
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const notesContext = useContext(NotesContext);

  if (!notesContext) {
    return null;
  }

  const { editNote, deleteNote } = notesContext;

  const handleEdit = () => {
    const updatedNote = { ...note, title: note.title + ' (edited)' };
    editNote(updatedNote);
  };

  const handleDelete = () => {
    deleteNote(note.id);
  };

  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;

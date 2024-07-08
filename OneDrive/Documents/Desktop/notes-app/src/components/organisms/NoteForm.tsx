import React, { useState, useContext } from 'react';
import { NotesContext } from '../../context/NotesContext';

const NoteForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const notesContext = useContext(NotesContext);

  if (!notesContext) {
    return null;
  }

  const { addNote } = notesContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
    };
    addNote(newNote);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;

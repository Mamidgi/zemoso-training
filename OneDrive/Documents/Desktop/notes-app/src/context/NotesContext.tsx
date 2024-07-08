import React, { createContext, useState, ReactNode } from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
}

interface NotesContextType {
  notes: Note[];
  addNote: (note: Note) => void;
  editNote: (note: Note) => void;
  deleteNote: (id: string) => void;
}

export const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) => setNotes([...notes, note]);
  const editNote = (updatedNote: Note) => setNotes(notes.map(note => note.id === updatedNote.id ? updatedNote : note));
  const deleteNote = (id: string) => setNotes(notes.filter(note => note.id !== id));

  return (
    <NotesContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

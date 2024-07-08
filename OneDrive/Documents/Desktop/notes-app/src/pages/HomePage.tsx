import React from 'react';
import NoteForm from '../components/organisms/NoteForm';
import NotesList from '../components/organisms/NotesList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Notes Application</h1>
      <NoteForm />
      <NotesList />
    </div>
  );
};

export default HomePage;

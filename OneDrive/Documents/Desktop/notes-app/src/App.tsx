import React from 'react';
import { NotesProvider } from './context/NotesContext';
import HomePage from './pages/HomePage';
import './index.css';

const App: React.FC = () => {
  return (
    <NotesProvider>
      <div className="App">
        <HomePage />
      </div>
    </NotesProvider>
  );
};

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputDisplay from './components/InputDisplay';
import ActivePerson from './components/ActivePerson';

function App() {
  return (
    <div className="App">
      <InputDisplay/>
      <ActivePerson/>
    </div>
  );
}

export default App;

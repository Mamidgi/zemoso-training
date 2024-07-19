import React from 'react';
import Cashkickpage from './components/pages/Cashkickpage';
import Dashboard from './components/organisms/Dashboard';
// import Card from './components/organisms/Card';
import CashKick2 from './components/organisms/Cashkick2';
import './App.css';
import CashKick from './components/organisms/Cashkick2';

const App: React.FC = () => {
  return (
    <div className="App">
      <Cashkickpage />
      <Dashboard/>
      <CashKick2/>
    </div>
  );
};

export default App;



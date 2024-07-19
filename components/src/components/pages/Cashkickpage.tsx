import React from 'react';
import Cashtemplate from '../Templates/Chastemplate';
import '../../styles/cashkick.css';
const Cashkickpage: React.FC = () => {
  const handleClose = () => {
    console.log('Modal closed');
  };

  const handleViewCashKicks = () => {
    console.log('Viewing cash kicks');
  };

  return (
    <div className="home-page">
      <Cashtemplate onClose={handleClose} onViewCashKicks={handleViewCashKicks} />
    </div>
  );
};

export default Cashkickpage;

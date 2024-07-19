import React from 'react';
import CallToAction from '../molecules/CallToAction';
import '../../styles/cashkick2.css';

const CashKick: React.FC = () => {
  const handleButtonClick = () => {
    
  };

  return (
    <div className="cash-kick">
      <CallToAction
        title="Launch a new Cash Kick"
        subtitle="You have upto $880,000.00 available for a new cash advance"
        buttonText="New Cash Kick"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default CashKick;

import React from 'react';
import CardDetails from '../molecules/CardDetails';
import backgroundImage from '../../assets/bg.svg';

const FundingApproval: React.FC = () => {
  const handleButtonClick = () => {
   
  };

  return (
    <div className="funding-approval" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <CardDetails
        title="Congratulations you are ready to start!"
        subtitle="You are approved for funding. We are ready to advance you upto $8.8M"
        buttonText="Learn More"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default FundingApproval;

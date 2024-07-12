import React from 'react';
import DueCard from '../organisms/DueCard';

const DueTemplate: React.FC = () => {
  const dueDate = 'May 03, 2021';
  const amount = '$14,204.55';
  const dueInDays = 'Due in 30 day(s)';

  return <DueCard dueDate={dueDate} amount={amount} dueInDays={dueInDays} />;
};

export default DueTemplate;

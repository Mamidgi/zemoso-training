import React from 'react';
import Button from '../atoms/Button';
import Message from '../molecules/Message';

interface CashkickProps {
  onClose: () => void;
  onViewCashKicks: () => void;
}

const Cashkick: React.FC<CashkickProps> = ({ onClose, onViewCashKicks }) => {
  return (
    <div className="cashkick">
      <Message />
      <div className="buttons">
        <Button text="Close" onClick={onClose} className="close-button" />
        <Button text="View Cash Kicks" onClick={onViewCashKicks} className="view-button" />
      </div>
    </div>
  );
};

export default Cashkick;

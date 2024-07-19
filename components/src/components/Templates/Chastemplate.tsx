import React from 'react';
import Cashkick from '../organisms/Cashkick';

type CashtemplateProps = {
  onClose: () => void;
  onViewCashKicks: () => void;
};

const Cashtemplate: React.FC<CashtemplateProps> = ({ onClose, onViewCashKicks }) => {
  return (
    <div className="modal-template">
      <Cashkick onClose={onClose} onViewCashKicks={onViewCashKicks} />
    </div>
  );
};

export default Cashtemplate;

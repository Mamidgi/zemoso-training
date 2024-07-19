import React from 'react';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

interface CallToActionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className="call-to-action">
      <Text className="title" content={title} />
      <Text className="subtitle" content={subtitle} />
      <button className="button">{buttonText}</button>
    </div>
  );
};

export default CallToAction;


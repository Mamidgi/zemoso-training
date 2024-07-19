import React from 'react';

interface ButtonProps {
  text: string;
  primary?: boolean;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, primary, onClick, className }) => {
  const buttonClass = primary ? 'primary' : '';
  return (
    <button className={`${buttonClass} ${className}`} onClick={onClick}>
      {text}
    </button>
    
  );
};

export default Button;

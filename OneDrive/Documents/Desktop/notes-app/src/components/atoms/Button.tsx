import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit';
  styleType?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button', styleType = 'primary' }) => {
  const buttonClass = styleType === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;

import React from 'react';
import { Typography } from '@mui/material';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'body1' | 'body2' | 'h6' | 'subtitle1' | 'subtitle2';
}

const Text: React.FC<TextProps> = ({ children, className, variant = 'body1' }) => {
  return (
    <Typography className={className} variant={variant}>
      {children}
    </Typography>
  );
};

export default Text;



import React from 'react';
import { Typography } from '@mui/material';

interface TextProps {
  children: React.ReactNode;
  variant?: 'body1' | 'body2' | 'h6' | 'subtitle1' | 'subtitle2'|'h1';
}

const Text: React.FC<TextProps> = ({ children,variant }) => {
  return (
    <Typography  variant={variant}>
      {children}
    </Typography>
  );
};

export default Text;



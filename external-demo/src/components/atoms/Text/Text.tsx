import React from 'react';
import { Typography } from '@mui/material';

interface TextProps {
  children: React.ReactNode;
  variant: 'h1' | 'h3' | 'body1' | 'body2' | 'subtitle1';
}

const Text: React.FC<TextProps> = ({ children, variant }) => {
  return (
    <Typography variant={variant}>{children}</Typography>
  );
}

export default Text;
export{};

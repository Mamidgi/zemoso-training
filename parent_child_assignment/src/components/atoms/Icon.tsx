


import React from 'react';
import { Box } from '@mui/material';
import icon from '../../assets/icon1.png'; // Update the path if needed

interface IconProps {
  className?: string;
}

const Icon: React.FC<IconProps> = ({ className }) => {
  return (
    <Box
      component="img"
      src={icon}
      alt="Icon"
      className={className}
      // sx={{ width: '80px', height: '80px' }} // Adjust size as needed
    />
  );
};

export default Icon;

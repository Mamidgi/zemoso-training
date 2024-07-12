
import React from 'react';
import { Box } from '@mui/material';
import Text from '../atoms/Text';

interface LabelWithIconProps {
  mainIconSrc: string;
  smallIconSrc: string;
  iconClassName?: string;
  smallIconClassName?: string;
  textClassName?: string;
  label: string;
}

const LabelWithIcon: React.FC<LabelWithIconProps> = ({ mainIconSrc, smallIconSrc, iconClassName, smallIconClassName, textClassName, label }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="start">
      <Box component="img" src={mainIconSrc} className={iconClassName} alt="Main Icon" sx={{ width: '80px', height: '80px', mb: 1 }} />
      <Box display="flex" alignItems="center">
        <Text className={textClassName} variant="subtitle1">
          {label}
        </Text>
        <Box component="img" src={smallIconSrc} className={smallIconClassName} alt="Small Icon" sx={{ width: '16px', height: '16px', ml: 1 }} />
      </Box>
    </Box>
  );
};

export default LabelWithIcon;

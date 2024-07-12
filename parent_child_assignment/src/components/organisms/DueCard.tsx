


import React from 'react';
import LabelWithIcon from '../molecules/LabelWithIcon';
import { Card, CardContent, Box, Typography } from '@mui/material';
import mainIconSrc from '../../assets/icon1.png'; // Main icon (larger)
import smallIconSrc from '../../assets/icon2.png'; // Small info icon

interface DueCardProps {
  dueDate: string;
  amount: string;
  dueInDays: string;
}

const DueCard: React.FC<DueCardProps> = ({ dueDate, amount, dueInDays }) => {
  return (
    <Card sx={{ backgroundColor: 'background.paper', width: '340px',height: '259' }}>
      <CardContent>
        <Box display="flex" justifyContent="flex-end">
          <Typography
            variant="body2"
            sx={{
              backgroundColor: 'primary.main',
              color: 'text.secondary',
              padding: '4px 8px 4px 8px',
              borderRadius: '4px',
              widht: '123px',
              height: '25px',
           
            }}
          >
            {dueInDays}
          </Typography>
        </Box>
        <Box my={2}>
          <LabelWithIcon
            mainIconSrc={mainIconSrc}
            smallIconSrc={smallIconSrc}
            iconClassName="text-primary"
            smallIconClassName="text-secondary"
            textClassName="text-subtitle1"
            label={`Due - ${dueDate}`}
          />
        </Box>
        <Typography variant="h6">{amount}</Typography>
      </CardContent>
    </Card>
  );
};

export default DueCard;

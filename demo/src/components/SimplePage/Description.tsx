// src/components/Description.tsx
import React from 'react';
import { Container, Typography} from '@mui/material';


const Description: React.FC = () => (
  <Container style={{ marginTop: 20 }}>
    <Typography variant="h3" >
      Description Page
    </Typography>
    <Typography variant="body1">
      This is the description page. 
    </Typography>
    
  </Container>
);

export default Description;

// src/components/Home.tsx
import React from 'react';
import { Typography, Container } from '@mui/material';

const Home: React.FC = () => (
  <Container style={{ marginTop: 20 }}>
    <Typography variant="h3" gutterBottom>
      Home Page
    </Typography>
    <Typography variant="body1">
      Welcome to the home page!
    </Typography>
  </Container>
);

export default Home;

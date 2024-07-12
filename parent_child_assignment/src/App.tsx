import React from 'react';
import DueTemplate from './components/templates/DueTemplate';
import { CssBaseline, Box, ThemeProvider } from '@mui/material';
import theme from './theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: 'background.default' }}>
        <DueTemplate />
      </Box>
    </ThemeProvider>
  );
};

export default App;

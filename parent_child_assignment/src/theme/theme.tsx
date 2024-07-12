import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E39AB2',
    },
    background: {
      paper: '#212121',
      default: '#303030',
    },
    text: {
      primary: '#ffffff',
      secondary: '#201F24',
    },
  },
  typography: {
    h6: {
      fontFamily: 'Gillroy',
      fontSize: '24px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      color: '#ffffff',
    },
    body2: {
      fontFamily: 'Gillroy',
      fontSize: '14px',
      fontWeight: 600,
      LineHeight:'29.4px'
    },
    subtitle1: {
      fontFamily: 'Gillroy',
      fontSize: '16px',
      color: '#ffffff',
      fontWeight: 500,
      LineHeight:'22.4px',
    },
  },
});

export default theme;


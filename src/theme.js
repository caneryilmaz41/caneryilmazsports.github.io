import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
    },
    secondary: {
      main: '#1976d2',
    },
  },
  typography: {
    h6: {
      fontWeight: 'bold',
    },
  },
});

export default theme;

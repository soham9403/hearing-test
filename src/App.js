
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import './App.css';

import RouteIndex from './routes/RouteIndex';
const theme = createTheme({
  typography: {
    fontFamily: 'font-h1-metropolis-regular',
  },
  palette: {
    primary: {
      main: 'rgb(0,0,0)',
    },
    secondary: {
      main: '#F73A47',
    },
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouteIndex />
      </div>
    </ThemeProvider>
  );
}

export default App;

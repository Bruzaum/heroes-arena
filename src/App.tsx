import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material';
import { AppProvider } from './hooks/useAppContext';
import Routes from './routes/Routes';
import ModalCombat from './components/ModalCombat';

import './styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
  typography: {
    fontFamily: ['Bangers'].join(','),
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <ThemeProvider theme={theme}>
          <ModalCombat />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;

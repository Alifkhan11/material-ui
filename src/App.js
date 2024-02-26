import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './componant/router/Router';
import { ThemeProvider } from '@emotion/react';
import { theme } from './componant/thim/Thim';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}
      ></RouterProvider>
    </ThemeProvider>
  );
}

export default App;

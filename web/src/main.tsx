import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalCSS } from './styles/Global';
import { theme } from './styles/theme';
import { DashBoard } from './pages/DashBoard';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <DashBoard />
    </ThemeProvider>
  </StrictMode>,
);

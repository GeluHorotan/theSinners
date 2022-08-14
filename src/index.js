import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import ScrollToTop from './components/ScrollToTop';

const root = createRoot(document.getElementById('root'));

const queryClient = new QueryClient();
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
  // </React.StrictMode>
);

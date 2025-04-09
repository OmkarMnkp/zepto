// src/main.jsx or src/index.jsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { CartProvider } from './context/CartContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx'; // Optional
import { ZeptoContextProvider } from './context/ZeptoContext.jsx'; // Optional
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <AuthProvider>
        <ZeptoContextProvider>
          <ThemeProvider>
          <App />
          </ThemeProvider>
        </ZeptoContextProvider>
      </AuthProvider>
    </CartProvider>
  </StrictMode>
);

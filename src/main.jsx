import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<SidebarProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
</SidebarProvider>
);
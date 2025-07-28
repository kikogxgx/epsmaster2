import React from 'https://unpkg.com/react@18.2.0?module';
import ReactDOM from 'https://unpkg.com/react-dom@18.2.0/client?module';
import { BrowserRouter } from 'https://unpkg.com/react-router-dom@6.21.2?module';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

import React from 'https://cdn.skypack.dev/react@18.2.0';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@18.2.0/client';
import { BrowserRouter } from 'https://cdn.skypack.dev/react-router-dom@6.21.2';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

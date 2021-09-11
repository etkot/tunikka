import React from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'leaflet/dist/leaflet.css';
import ReactDOM from 'react-dom';
import App from 'src/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

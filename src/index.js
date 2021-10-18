import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import NetworkErrorPage from './components/NetworkErrorPage';

ReactDOM.render(
  <React.StrictMode>
      {window.navigator.onLine ? <App /> : <NetworkErrorPage/>}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

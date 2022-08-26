import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let client = new WebSocket("wss://tarea-1.2022-2.tallerdeintegracion.cl/connect");
client.onopen = function(e) {
console.log("[open] Connection established");
client.send('{"type": "join","id": "15b5c75e-d857-4545-8239-13c9161c97f3","username": "Tomás"}');
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

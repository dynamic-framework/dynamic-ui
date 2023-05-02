import React from 'react';
import ReactDOM from 'react-dom/client';

import '@modyo-dynamic/modyo-design-system/dist/design-system/design-system.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

document.querySelectorAll('#react-profile')
  .forEach((container) => {
    const root = ReactDOM.createRoot(
      container as HTMLElement
    );

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
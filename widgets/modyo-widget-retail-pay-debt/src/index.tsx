import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import '@modyolabs/design-system/dist/design-system/design-system.css';
import {
  LiquidContextProvider,
  ModalContextProvider,
  MToastContainer,
} from '@modyolabs/react-design-system';

import './styles/base.scss';
import './config/liquidConfig';
import './config/i18nConfig';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import ModalAccountSelector from './components/ModalAccountSelector';
import ModalSchedule from './components/ModalSchedule';
import ModalPaymentAlternatives from './components/ModalPaymentAlternatives';
import ModalConfirmPayment from './components/ModalConfirmPayment';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <LiquidContextProvider>
      <Provider store={store}>
        <ModalContextProvider
          portalName="portal"
          availableModals={{
            accountSelector: ModalAccountSelector,
            confirmPayment: ModalConfirmPayment,
            paymentAlternatives: ModalPaymentAlternatives,
            schedule: ModalSchedule,
          }}
        >
          <App />
          <MToastContainer />
        </ModalContextProvider>
      </Provider>
    </LiquidContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

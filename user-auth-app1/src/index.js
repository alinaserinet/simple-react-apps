import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AlertsProvider } from './context/alert-context/alert-context';
import {AuthProvider} from "./context/auth-context";

ReactDOM.render(
    <AuthProvider >
      <AlertsProvider>
        <App />
      </AlertsProvider>
    </AuthProvider>,
  document.getElementById('root')
);

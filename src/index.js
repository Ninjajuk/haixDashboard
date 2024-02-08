import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { SnackbarProvider } from 'notistack'
import { RouterProvider } from "react-router-dom";
import {store} from './redux/store'
import router from '../src/routes/Routes'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </RouterProvider>
    </Provider>
  </React.StrictMode>
);



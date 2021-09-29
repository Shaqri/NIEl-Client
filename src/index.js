import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Components/AppRouter';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './reducers/index';
import './style/index.css';
const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} > 
        <Router>
          <AppRouter />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

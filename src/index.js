// React
import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from "react-router-dom";


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let persistor = persistStore(store)

ReactDOM.render(

        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>,

	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

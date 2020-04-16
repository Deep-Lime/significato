import * as serviceWorker from './serviceWorker';
import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

// Создаём RerenderDOMTree для возможности повторного вызоваи и отрисовки
let RerenderDOMTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} Dispatch={store.Dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

// Вызов с передачей State
RerenderDOMTree(store.getState());

// Патерн Observer
store.Subscribe(RerenderDOMTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

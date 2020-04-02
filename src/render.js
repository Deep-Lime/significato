import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {NewPost} from './Redux/state';
import {NewMassage} from './Redux/state';
import {BrowserRouter} from "react-router-dom";

export let RerenderDOMTree = (stat) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={stat} NewPost={NewPost} NewMassage={NewMassage}/>
        </BrowserRouter>, document.getElementById('root'));
};
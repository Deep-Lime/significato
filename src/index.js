import * as serviceWorker from './serviceWorker';
import state, { Subscribe } from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {NewPost, UpdatePostText, NewMassage, UpdateMassageText} from './Redux/state';
import {BrowserRouter} from "react-router-dom";

let RerenderDOMTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 NewPost={NewPost}
                 NewMassage={NewMassage}
                 UpdatePostText={UpdatePostText}
                 UpdateMassageText={UpdateMassageText}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

RerenderDOMTree(state);

Subscribe(RerenderDOMTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

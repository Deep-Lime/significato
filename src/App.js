import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {

    // Header и Footer пока не импортируется ( Не доделаны )
    return (
        <section className="main">

            <Sidebar />

            <div className="main_content">
                <Route path='/Profile'
                       render={() => <Profile ProfilePage={props.state.ProfilePage}
                                              Dispatch={props.Dispatch}/>}/>
                <Route path='/Dialogs'
                       render={() => <Dialogs DialogsPage={props.state.DialogsPage}
                                              NewMessageText={props.state.DialogsPage.NewMessageText}
                                              Dispatch={props.Dispatch}/>}/>
            </div>
        </section>
    );
};


export default App;
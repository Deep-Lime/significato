import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {

    return (
        <section className="main">
            <Sidebar/>

            <div className="main_content">
                <Route path='/Profile'
                       render={() => <Profile ProfilePage={props.state.ProfilePage}
                                              NewPost={props.NewPost}
                                              UpdatePostText={props.UpdatePostText}/>}/>
                <Route path='/Dialogs' render={() => <Dialogs DialogsPage={props.state.DialogsPage}
                                                              NewMassageText={props.state.DialogsPage.NewMassageText}
                                                              NewMassage={props.NewMassage}
                                                              UpdateMassageText={props.UpdateMassageText}/>}/>
            </div>
        </section>
    );
};


export default App;
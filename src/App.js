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
                <Route path='/Profile' render={() => <Profile state={props.state.profilePage}
                                                              NewPost={props.NewPost}/>}/>
                <Route path='/Dialogs' render={() => <Dialogs state={props.state.dialogsPage}
                                                              NewMassage={props.NewMassage}/>}/>
            </div>
        </section>
    );
};


export default App;
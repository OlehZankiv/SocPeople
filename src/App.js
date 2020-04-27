import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/component/Profile/Profile";
import { Route } from "react-router-dom";
import Music from "./components/component/Music/Music";
import Settings from "./components/component/Settings/Settings";
import News from "./components/component/News/News";
import DialogsContainer from "./components/component/Dialogs/DialogsContainer";
import UsersContainer from "./components/component/Users/UsersContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <main className="main container">
                <Navbar />
                <div className="content">
                    <Route path="/profile" component={Profile} />
                    <Route path="/dialogs" component={DialogsContainer} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/users" component={UsersContainer} />
                </div>
            </main>
        </div>
    );
};

export default App;

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Music from "./components/component/Music/Music";
import Settings from "./components/component/Settings/Settings";
import News from "./components/component/News/News";
import DialogsContainer from "./components/component/Dialogs/DialogsContainer";
import UsersContainer from "./components/component/Users/UsersContainer";
import ProfileContainer from "./components/component/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <main className="main container">
                <Navbar />
                <div className="content">
                    <Route
                        path="/profile/:userId?"
                        component={ProfileContainer}
                    />
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

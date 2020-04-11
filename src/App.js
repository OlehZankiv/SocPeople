import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/content/Profile/Profile";
import Dialogs from "./components/content/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import Music from "./components/content/Music/Music";
import Settings from "./components/content/Settings/Settings";
import News from "./components/content/News/News";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <main className="main container">
                    <Navbar />
                    <div className="content">
                        <Route path="/profile" component={Profile} />
                        <Route path="/dialogs" component={Dialogs} />
                        <Route path="/news" component={News} />
                        <Route path="/music" component={Music} />
                        <Route path="/settings" component={Settings} />
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;

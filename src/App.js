import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/component/Profile/Profile";
import { Route, BrowserRouter } from "react-router-dom";
import Music from "./components/component/Music/Music";
import Settings from "./components/component/Settings/Settings";
import News from "./components/component/News/News";
import DialogsContainer from "./components/component/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <main className="main container">
                    <Navbar store={props.store} />
                    <div className="content">
                        <Route
                            path="/profile"
                            render={() => <Profile store={props.store} />}
                        />
                        <Route
                            path="/dialogs"
                            render={() => <DialogsContainer store={props.store} />}
                        />
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

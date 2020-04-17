import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/component/Profile/Profile";
import Dialogs from "./components/component/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import Music from "./components/component/Music/Music";
import Settings from "./components/component/Settings/Settings";
import News from "./components/component/News/News";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <main className="main container">
                    <Navbar friends={props.state.friends}/>
                    <div className="content">
                        <Route
                            path="/profile"
                            render={() => <Profile profile={props.state.profile} />}
                        />
                        <Route
                            path="/dialogs"
                            render={() => (
                                <Dialogs
                                    dialogs={props.state.dialogs.dialogs}
                                    messages={props.state.dialogs.messages}
                                />
                            )}
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

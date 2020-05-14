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
import LoginContainer from "./components/component/Login/LoginContainer";
import { initialize } from "./redux/initialize_reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Loader from "./components/component/common/Loader";
class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if(!this.props.isInitialized) return <Loader />
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
                        <Route path="/login" component={LoginContainer} />
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isInitialized: state.initialize.isInitialized,
});

export default compose(connect(mapStateToProps, { initialize }))(App);

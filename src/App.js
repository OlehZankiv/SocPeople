import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter, BrowserRouter, Redirect, Switch } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import { initialize } from "./redux/initialize_reducer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Loader from "./components/component/common/Loader";
import store from "./redux/redux-store";
import ErrorBoundary from "./components/component/common/Error/ErrorBoundary";

const ProfileContainer = React.lazy(() => import("./components/component/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/component/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/component/Users/UsersContainer"));
const News = React.lazy(() => import("./components/component/News/News"));
const Settings = React.lazy(() => import("./components/component/Settings/Settings"));
const Music = React.lazy(() => import("./components/component/Music/Music"));
const LoginContainer = React.lazy(() => import("./components/component/Login/LoginContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.isInitialized) return <Loader />;

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <main className="main container">
                    <Navbar />
                    <div className="content">
                        <Suspense fallback={<Loader />}>
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to="/profile" />} />
                                <Route path="/profile/:userId?" component={ProfileContainer} />
                                <Route path="/dialogs" component={DialogsContainer} />
                                <Route path="/news" component={News} />
                                <Route path="/music" component={Music} />
                                <Route path="/settings" component={Settings} />
                                <Route path="/users" component={UsersContainer} />
                                <Route path="/login" component={LoginContainer} />
                                <Route path="*" render={() => <div>404 NOT FOUND</div>} />
                            </Switch>
                        </Suspense>
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = ({ initialize }) => ({
    isInitialized: initialize.isInitialized,
});

const AppContainer = compose(withRouter, connect(mapStateToProps, { initialize }))(App);

const SocPeopleApp = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    );
};

export default SocPeopleApp;

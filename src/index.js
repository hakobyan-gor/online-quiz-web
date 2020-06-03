import AuthenticationService from './platform/services/authentication/AuthenticationService'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AuthenticationRoute from './platform/AuthenticationRoute'
import * as serviceWorker from './serviceWorker'
import ROUTES from './platform/constants/routes'
import ContactUs from './components/contact-us'
import AboutUs from './components/about-us'
import Header from './components/header'
import Footer from './components/footer'
import Error from './components/error'
import Profile from './pages/profile'
import signIn from './pages/sign-in'
import signUp from './pages/sign-up'
import Quiz from './components/quiz'
import ReactDOM from 'react-dom'
import Home from './pages/home'
import React from 'react'


function App() {

    return (
        <Router>
            <Header />
            <Switch>
                <AuthenticationRoute path={ROUTES.QUIZZES + '/category/:category'} component={Quiz} />
                <AuthenticationRoute path={ROUTES.CONTACT_US} component={ContactUs} />
                <AuthenticationRoute path={ROUTES.ABOUT_US} component={AboutUs} />
                <AuthenticationRoute path={ROUTES.PROFILE} component={Profile} />
                <AuthenticationRoute path={ROUTES.QUIZZES} component={Quiz} />
                <AuthenticationRoute path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.SIGN_IN} exact component={signIn} />
                <Route path={ROUTES.SIGN_UP} exact component={signUp} />
                <Route path={'/'} exact component={RedirectTo} />
                <AuthenticationRoute component={Error} />
            </Switch>
            <Footer />
        </Router >
    )

}

function RedirectTo() {
    if (AuthenticationService.isUserLoggedIn()) {
        return <Redirect to={ROUTES.HOME} />
    }
    return <Redirect to={ROUTES.SIGN_IN} />
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

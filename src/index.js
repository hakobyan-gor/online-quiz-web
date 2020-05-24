import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ROUTES from './platform/constants/routes'

import Header from './components/header'
import Footer from './components/footer'
import ContactUs from './components/contact-us'
import AboutUs from './components/about-us'
import Error from './components/error'
import Profile from './pages/profile'
import signIn from './pages/sign-in'
import signUp from './pages/sign-up'
import AuthenticationRoute from './platform/AuthenticationRoute'

function App() {

    return (
        <Router>
            <Header />
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={ROUTES.SIGN_IN} exact component={signIn} />
                <Route path={ROUTES.SIGN_UP} exact component={signUp} />
                <AuthenticationRoute path={ROUTES.CONTACT_US} component={ContactUs} />
                <AuthenticationRoute path={ROUTES.PROFILE} component={Profile} />
                <AuthenticationRoute path={ROUTES.CONTACT_US} component={ContactUs} />
                <AuthenticationRoute path={ROUTES.ABOUT_US} component={AboutUs} />
                <AuthenticationRoute component={Error} />
            </Switch>
            <Footer />
        </Router >
    )

}

function Home() {
    return (
        <Redirect to={ROUTES.SIGN_IN} />
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

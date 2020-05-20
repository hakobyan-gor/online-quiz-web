import React, { useState } from 'react'
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

function App() {

    return (
        <Router>
            <Header />
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/sign-in'} exact component={signIn} />
                <Route path={'/sign-up'} exact component={signUp} />
                <Route path={ROUTES.CONTACT_US} component={ContactUs} />
                <Route path={ROUTES.PROFILE} component={Profile} />
                <Route path={ROUTES.CONTACT_US} component={ContactUs} />
                <Route path={ROUTES.ABOUT_US} component={AboutUs} />
                <Route path={ROUTES.ERROR} component={Error} />
            </Switch>
            <Footer />
        </Router >
    )

}

function Home(){
    return(
        <Redirect to='/sign-in' />
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

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
import Management from './components/sign-in(up)-manage'

function App() {

    return (
        <Router>
            <Header />
            <Switch>
                <Route path={'/join-us'} exact component={Management} />
                <Route path={'/'} component={Home} />
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
        <Redirect to='/join-us' />
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

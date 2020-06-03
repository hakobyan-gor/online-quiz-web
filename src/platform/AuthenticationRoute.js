import AuthenticationService from './services/authentication/AuthenticationService'
import { Redirect, Route } from 'react-router-dom'
import React, { Component } from 'react'

class AuthenticationRoute extends Component {
    render(){
        if (!AuthenticationService.isUserLoggedIn()) {
            return <Redirect to='/sign-in' />
        } else {
            return <Route {...this.props} />
        }
    }
}

export default AuthenticationRoute
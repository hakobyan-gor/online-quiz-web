import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthenticationService from "./services/authentication/AuthenticationService";

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
import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthenticationRoute from "../../platform/services/authentication/AuthenticationService";

function Error() {
    return (
        <div>
            <h1>
                Error 404
            </h1>
            <div>
                Page not found
            </div>
        </div>
    )
}

export default Error
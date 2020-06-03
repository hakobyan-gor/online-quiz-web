import ROUTES from '../../platform/constants/routes'
import { withRouter } from 'react-router-dom'
import React from 'react'

function Footer(props) {
    if (
        props.history.location.pathname === ROUTES.SIGN_IN ||
        props.history.location.pathname === ROUTES.SIGN_UP
    ) {
        return <div></div>
    }
    return (
        <div></div>
    )

}

export default withRouter(Footer)
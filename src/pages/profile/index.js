import React from "react";

function Profile() {
    return (
        <div>
            Hello {sessionStorage.getItem('user')}
            Your token {sessionStorage.getItem('token')}
        </div>
    )
}

export default Profile
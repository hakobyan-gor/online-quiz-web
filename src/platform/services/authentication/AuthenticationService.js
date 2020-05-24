class AuthenticationService {

    isUserLoggedIn() {
        if (sessionStorage.getItem('user') === null) {
            return false
        }
        return true
    }

    logInUser(data) {
        sessionStorage.setItem('user', data.username)
        sessionStorage.setItem('token', data.token)
    }

}

export default new AuthenticationService()
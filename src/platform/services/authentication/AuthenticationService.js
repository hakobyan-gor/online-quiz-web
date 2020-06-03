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

    setPendingUserId(data){
        sessionStorage.setItem('pendingUserId', data.id)
    }

    getPendingUserId(){
        return sessionStorage.getItem('pendingUserId')
    }

    logOut(){
        sessionStorage.removeItem('pendingUserId')
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('token')
    }

}

export default new AuthenticationService()
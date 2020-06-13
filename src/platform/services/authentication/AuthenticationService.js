class AuthenticationService {

    isUserLoggedIn() {
        if (localStorage.getItem('user') === null) {
            return false
        }
        return true
    }

    logInUser(data) {
        localStorage.setItem('user', data.username)
        localStorage.setItem('token', data.token)
    }

    setPendingUserId(data){
        localStorage.setItem('pendingUserId', data.id)
    }

    getPendingUserId(){
        return localStorage.getItem('pendingUserId')
    }

    logOut(){
        localStorage.removeItem('pendingUserId')
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

}

export default new AuthenticationService()
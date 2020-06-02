import axios from "axios";
import API_URL from "../../constants/environment";
import ROUTES from '../../constants/routes'
import AuthenticationService from "../authentication/AuthenticationService";

class SignUpService {

    signUp(firstName, lastName, password, email) {
        return axios.post(API_URL + ROUTES.SIGN_UP, {firstName, lastName, password, email})
    }

    verifyEmail(confirmationToken){
        let userId = AuthenticationService.getPendingUserId()
        return axios.post(API_URL + '/verify-eMail', {confirmationToken, userId})
    }

}

export default new SignUpService()
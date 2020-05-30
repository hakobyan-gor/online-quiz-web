import axios from "axios";
import API_URL from "../../constants/environment";
import ROUTES from '../../constants/routes'

class SignUpService {

    signUp(signUpRequset) {
        return axios.post(API_URL + ROUTES.SIGN_UP, signUpRequset)
    }

}
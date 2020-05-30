import axios from "axios";
import API_URL from "../../constants/environment"
import ROUTES from '../../constants/routes'

class SignInService {

    signIn(username, password){ 
        return axios.post(API_URL + ROUTES.SIGN_IN, {username, password})
    }

}

export default new SignInService()
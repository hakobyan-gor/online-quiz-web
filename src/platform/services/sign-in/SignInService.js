import axios from "axios";
import API_URL from "../../constants/environment"

class SignInService {

    signIn(username, password){ 
        return axios.post(API_URL + '/sign-in', {username, password})
    }

}

export default new SignInService()
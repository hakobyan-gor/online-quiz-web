import axios from "axios";
import API_URL from "../../constants/environment"

class SignInService {

    signIn(signInRequest){
        return axios.post(API_URL + '/sign-in', signInRequest);
    }

}

export default new SignInService()
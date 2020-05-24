import axios from "axios";
import API_URL from "../../constants/environment";

class SignUpService {

    signUp(signUpRequset) {
        return axios.post(API_URL + '/sign-up', signUpRequset)
    }

}
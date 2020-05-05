import axios from "axios";

class SignInService {

    signIn(signInRequest){
        return axios.post('http://localhost:8080/sign-in', signInRequest);
    }

}

export default new SignInService()
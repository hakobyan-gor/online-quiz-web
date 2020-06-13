import AuthenticationService from '../authentication/AuthenticationService'
import API_URL from '../../constants/environment'
import ROUTES from '../../constants/routes'
import axios from 'axios'

class LogOut{

    logOut(){
        axios.patch(
            // must change response model 
            // add id in jwt response model
            API_URL + ROUTES.LOG_OUT + '/user/id/' + AuthenticationService.getUserId(),
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
    }

}

export default new LogOut()
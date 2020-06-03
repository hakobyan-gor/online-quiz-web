import AuthenticationService from '../authentication/AuthenticationService'
import API_URL from '../../constants/environment'
import ROUTES from '../../constants/routes'
import axios from 'axios'

class LogOut{

    logOut(){
        axios.patch(
            API_URL + ROUTES.LOG_OUT + '/user/id/' + AuthenticationService.getPendingUserId(),
            {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                }
            }
        )
    }

}

export default new LogOut()
import axios from "axios"
import ROUTES from '../../constants/routes'
import API_URL from '../../constants/environment'

class QuizService {

    getQuizRootCategories() {
        return axios.get(
            API_URL + ROUTES.QUIZZES + '/root-categories',
            {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                }
            }
        )
    }

    getQuizzesByCategoryId(id) {
        console.log(API_URL + ROUTES.QUIZZES + '/get/category/' + id);
        
        return axios.get(
            API_URL + ROUTES.QUIZZES + '/get/category/' + id,
            {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                }
            }
        )
    }

}

export default new QuizService()
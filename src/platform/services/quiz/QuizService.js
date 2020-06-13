import API_URL from '../../constants/environment'
import ROUTES from '../../constants/routes'
import axios from "axios"

class QuizService {

    getQuizRootCategories() {
        return axios.get(
            API_URL + ROUTES.QUIZZES + '/root-categories',
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
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
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
    }

}

export default new QuizService()
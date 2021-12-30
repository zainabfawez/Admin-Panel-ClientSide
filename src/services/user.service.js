//Data Service

import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api/admin/';

 
class UserService{

    getFilteredCustomers(email, first_name, pagination_option, page){
        return axios
            .get(API_URL + 'get_filtered_customers/' + pagination_option +'?page='+ page , { 
                headers: authHeader(),
                params: {
                    email : email,
                    first_name : first_name, 
                }
            });
            
    } 
}

export default new UserService();

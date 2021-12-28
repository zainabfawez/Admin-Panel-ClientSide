//Data Service

import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/admin/';

class UserService{

    getFilteredCustomers(input, nbOfRows){
        return axios
            .get(API_URL + 'get_filtered_customers', { 
                headers: authHeader(),
                params: {
                    input : input,
                    nbOfRows : nbOfRows, 
                }
            });
            
    } 
}

export default new UserService();

//Authentication services
// login/logout/register

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService{

    login(user){
        return axios
            .post(API_URL + 'login',{
                email: user.email,
                password: user.password
            })
            .then(response => {
               if( response.data.accessToken){
                   localStorage.setItem(JSON.stringify(response.data));
               }
               return response.data;
            })
    }

    logout(){
        localStorage.removeItem('user');
    }

    register(user){
        return axios
            .post(API_URL + 'register',{
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                password: user.password,
            })
    }
}

export default new AuthService();
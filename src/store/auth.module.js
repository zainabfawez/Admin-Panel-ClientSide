//Authnetication Module
//state : status, user
//actions: login/logout/register
//mutations: loginSuccess/loginFailure/registerSuccess/registerFailure/logout

import AuthService from "../services/auth.service"; //login/logout/register

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? {status: {loggedIn: true}, user} : {state:{loggedIn: false}, user: null};

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login ({ commit }, user) {
            return  AuthService.login(user).then(
                user => {
                    commit ('loginSuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit ('loginFailure');
                    return Promise.reject(error);
                }
            );
        },

        logout ({ commit }) {
            AuthService.logout();
            commit('logout');
        },

        register ({ commit }, user){
            return AuthService.register(user).then(
                response => {
                    commit ('RegisterSuccess', response);
                    return Promise.resolve(response.data);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error);
                }                 
            );
        }
    },

    mutations: {
        loginSuccess (state, user){
            state.status.loggedIn = true;
            state.user = user;
        },

        loginFailure ( state) {
            state.status.loggedIn = false;
            state.user = null;
        },

        logout (state) {
            state.status.loggedIn = false;
            state.user = null;
        },

        registerSuccess (state) {
            state.status.loggedIn = false
        },

        registerFailure (state) {
            state.status.loggedIn = false
        },
    },
};
/* eslint-disable promise/param-names */
import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT
} from "../actions/auth";
import { 
  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR } from "../actions/user";
import apiCall from "utils/api";
import axios from "axios";

const state = {
  token: localStorage.getItem("user-token") || "",
  status: "",
  hasLoadedOnce: false
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};

const actions = {
  [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      const loginParam = {
            "username": user.username,
            "password": user.password
          }; 
      console.log("Processing AUTH_REQUEST signal in auth.js module");
      axios.post('/users/login',loginParam)
            .then(response => {
                console.log("Auth Succeed!");
                console.log(response);
                //write the userID and username into user store module.
                //userprofile = {username: user.username,userId:response.data};
                //set AUTH status;           
                commit(AUTH_SUCCESS,response.data);
                localStorage.setItem('user-token', response);
                resolve(response);
              })
             .catch(error => {
                console.log("Auth Error!");
                commit(AUTH_ERROR, error);
                localStorage.removeItem("user-token");
                reject(error);
               });
    });
  },
  /*[AUTH_SUCCESS]:({commit}) => {
    return new Promise(resolve => {
      commit(AUTH_SUCCESS,resp);
      dispatch(USER_REQUEST);
    });
  },*/
  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise(resolve => {
      commit(AUTH_LOGOUT);
      localStorage.removeItem("user-token");
      resolve();
    });
  }
};

const mutations = {
  [AUTH_REQUEST]: state => {
    state.status = "loading";
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = "success";
    state.token = resp;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: state => {
    state.status = "error";
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: state => {
    state.token = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

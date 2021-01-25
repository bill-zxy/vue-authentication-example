/* eslint-disable promise/param-names */
import {
  PAGE_REQUEST,
  PAGE_ERROR,
  PAGE_SUCCESS
} from "../actions/page";
//import { USER_REQUEST } from "../actions/user";
//import apiCall from "utils/api";
import axios from "axios";

const state = {
  data: null,
  status: ""
};

const getters = {
  getPageData: state => state.data,
  getPageStatus: state => state.status
}; 

const actions = {
  [PAGE_REQUEST]: ({ commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      commit(PAGE_REQUEST);
      axios.post('/pages/news',user)
            .then(response => {
                console.log("Get Pages Succeed!");
                //write the content into data in page store.
                commit(PAGE_SUCCESS,response.data);
              })
             .catch(error => {
                console.log("Fetching Page Error!");
                commit(PAGE_ERROR, err);
                reject(err);
               });

    }); 
    },
  /*[PAGE_SUCCESS]: ({ commit }) => {
    return new Promise(resolve => {
      commit(PAGE_SUCCESS);
    }); },*/
  [PAGE_ERROR]: ({ commit }) => {
      return new Promise(resolve => {
        commit(PAGE_ERROR);
      }); },
  
};

const mutations = {
  [PAGE_REQUEST]: state => {
    state.status = "loading";
  },
  [PAGE_SUCCESS]: (state, resp) => {
    state.status = "success";
    state.data = resp;
  },
  [PAGE_ERROR]: state => {
    state.status = "error";
    state.data = null;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

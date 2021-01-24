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
  data: "",
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
      axios.get('/pages/news.html')
          .then(resp => {
               commit(PAGE_SUCCESS, resp.data);
               this.$router.push("/mypage");
               resolve(resp);
           })
        .catch(err => {
          commit(PAGE_ERROR, err);
          reject(err);
        });
    });
  },
/*  [PAGE_SUCCESS]: ({ commit }) => {
    return new Promise(resolve => {
      commit(AUTH_LOGOUT);
      localStorage.removeItem("user-token");
      resolve();
    });
  }*/
};

const mutations = {
  [PAGE_REQUEST]: state => {
    state.status = "loading";
  },
  [PAGE_SUCCESS]: (state, resp) => {
    state.status = "success";
    state.data = resp.data;
  },
  [PAGE_ERROR]: state => {
    state.status = "error";
    state.data = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

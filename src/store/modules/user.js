import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from "../actions/user";
import apiCall from "utils/api";
import Vue from "vue";
import { AUTH_LOGOUT } from "../actions/auth";
import { PAGE_REQUEST } from "../actions/page";

const state = { status: "", profile: {} };

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name
};

const actions = {
  [USER_REQUEST]: ({ commit, dispatch },user) => {
    commit(USER_REQUEST);
    //fetch the user profile from server. input:url. output:profile{}
    /*apiCall({ url: "user/me" })
      .then(resp => {
        commit(USER_SUCCESS, resp);
        dispatch(PAGE_REQUEST);
      })
      .catch(() => {
        commit(USER_ERROR);
        // if resp is unauthorized, logout, to
      //  dispatch(AUTH_LOGOUT);
      });*/
    //Demo example to skip the real interactionw with server.  
    
    commit(USER_SUCCESS,{username:user.username,userId:user.userId});
    dispatch(PAGE_REQUEST);  
  }
};

const mutations = {
  [USER_REQUEST]: state => {
    state.status = "loading";
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = "success";
    Vue.set(state, "profile", resp);
  },
  [USER_ERROR]: state => {
    state.status = "error";
  },
  [AUTH_LOGOUT]: state => {
    state.profile = {};
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

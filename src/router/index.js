import Vue from "vue";
import Router from "vue-router";
import Home from "components/home";
import Account from "components/account";
import Login from "components/login";
import Register from "components/register";
import store from "../store";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/account",
      name: "Account",
      component: Account,
      beforeEnter: ifAuthenticated
    },
    {
      path: "/Sign In",
      name: "Login",
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path:"/Sign Up",
      name:"Register",
      component:Register,
      beforeEnter:ifNotAuthenticated
    }
  ]
});

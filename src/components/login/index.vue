/** * Created by vouill on 11/13/17. */

<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>User name</label>
      <input required v-model="username" type="text" placeholder="Snoopy" />
      <label>Password</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style>
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}
</style>

<script>
import {AUTH_REQUEST} from "actions/auth";
import {USER_REQUEST} from "actions/user";
import {PAGE_REQUEST} from "actions/page";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      
     //fetch the user inputs
      const { username, password } = this;
      var userId =null;
      //initiate the AUTH_REQUEST process;
      console.log("getting into dispatching AUTH_REQUEST procedure in login.vue");
      this.$store.dispatch(AUTH_REQUEST, { username, password })
                 .then(response => {
                     userId = response.data;})
                 .catch(err =>{
                     return;
                 });    
      //initiate the process of downloading user profile  
      console.log("getting into dispatching USER_REQUEST procedure in login.vue");
      this.$store.dispatch(USER_REQUEST,{username,userId})
                 .then(response=>{
                      
                  })
                .catch(err =>{
                      this.$router.push('/login');
                });
      //initiate the process of downloading my page. 
      console.log("Moving into dispatching PAGE_REQUESt procedure in index.vue of login component!");
      this.$store.dispatch(PAGE_REQUEST,{userId})
                 .then(response => {

                 })
                 .catch(err => {

                 });
      this.$router.push('/mypage');

  },
},
}
</script>



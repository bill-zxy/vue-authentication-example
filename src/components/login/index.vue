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
import { AUTH_SUCCESS} from "actions/auth";
import axios from "axios";

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
      userId =null;
      //initiate the AUTH_REQUEST process;
      this.$store.dispatch(AUTH_REQUEST, { username, password })
                 .then(response => {
                     userId = response.data;})
                 .catch(err =>{
                     return;
                 });    
      //initiate the process of downloading user profile  
      this.$store.dispach(USER_REQUEST,{username:username,userId:userId})
                 .then(response=>{
                      
                  })
                .catch(err =>{
                      this.$router.push('/login');
                });
      //initiate the process of downloading my page. 
      this.$store.dispatch(PAGE_REQUEST,{userId})
                 .then(response => {

                 })
                 .catch(err => {

                 });
      this.$route.push('/mypage');

  },
}
</script>



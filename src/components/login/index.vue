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
//import { AUTH_REQUEST } from "actions/auth";
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      isLogin:false,
      userId:null,
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      
      const loginParam = {
        "username": this.username,
      	"password": this.password
  	}; 
    console.log(loginParam);
     //设置在登录状态
    axios.post('/users/login',loginParam)
         .then(response => this.userId = response.data.id);
    if (this.userId != null) {
       this.$router.push("/");}
    }
  }
};
</script>

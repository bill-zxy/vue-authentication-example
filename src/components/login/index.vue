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
      
      const loginParam = {
        "username": this.username,
      	"password": this.password
  	  }; 

      axios.post('/users/login',loginParam)
         .then(response => {
            console.log("Auth Succeed!");
            console.log(response);
            this.$store.dispatch(AUTH_SUCCESS);
            })
         .catch(error => {
            console.log("Auth Error!");
            this.$store.commit(AUTH_ERROR); });
      this.$router.push('/mypage');
  }
  },
}
</script>



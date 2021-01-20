/** * Created by Bill ZXY on 18/01/2021. */

<template>
  <div>
    <form class="register" @submit.prevent="register">
      <h1>Sign up</h1>
      <label>User name</label>
      <input required v-model="name" type="text" placeholder="Snoopy" />
      <label>Email</label>
      <input required v-model="email" type="text" placeholder="Snoopy" />
      <label>Password</label>c
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <hr />
      <button type="submit">Submit</button>
    </form>
    <div v-if="isCreated"> Creating account successfully!</div>
    <div v-else> Fail to create a new account!</div>
  </div>
</template>

<style>
.register {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}
</style>

<script>
import { AUTH_REQUEST } from "actions/auth";

export default {
  name: "register",
  data() {
    return {
      isCreated:false,
      name: "dogo",
      email:"",
      age: 0,
      password: "dogy"
    };
  },
  methods: {
    register: function() {    
  		if(this.name!='' && this.password!=''){
  			this.toLogin();
  		}
  	},


  	//adopting hash to protect the password
    //	let password_sha = hex_sha1(hex_sha1( this.password ));

  //需要想后端发送的登录参数
    
  axios.post('/create', {
         name: this.username,
         email:this.email,
         password:this.password        // 参数 firstName
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    
   this.isLoging = true;
  
  this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
      this.$router.push("/");
    });
    }
  }
};
</script>

/** * Created by Bill ZXY on 18/01/2021. */

<template>
  <div>
    <form class="register" @submit.prevent="register">
      <h1>Sign up</h1>
      <label>User name</label>
      <input required v-model="username" type="text" placeholder="Snoopy" />
      <label>Email</label>
      <input required v-model="email" type="text" placeholder="Snoopy" />

      <label>Password</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <hr />
      <button type="submit">Submit</button>
    </form>
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
      username: "dogo",
      email:"",
      password: "dogy"
    };
  },
  methods: {
    register: function() {
    
    //  const { username, password } = this;

  	//adopting hash to protect the password
    //	let password_sha = hex_sha1(hex_sha1( this.password ));

  		//需要想后端发送的登录参数
  		let registerParam = {
  			name: this.username,
  			email:
        password: this.password
  		}

      //设置在登录状态
      this.isLoging = true;
      
  		//请求后端,比如:
  		this.$http.post( '/login', {
  		param: loginParam).then((response) => {
        if(response.data.code == 1){
          let expireDays = 1000 * 60 * 60 * 24 * 15;
          this.setCookie('session', response.data.session, expireDays);
          //登录成功后
          this.$router.push('/user_info'); 
        }
	    }, (response) => {
	        //Error
	    });

//      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
  //      this.$router.push("/");
  //    });
    }
  }
};
</script>

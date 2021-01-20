/** * Created by Bill ZXY on 18/01/2021. */

<template>
  <div>
    <form class="register" @submit.prevent="register">
      <h1>Sign up</h1>
      <label>User name</label>
      <input required v-model="name" type="text" placeholder="Snoopy" />
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
    <div class ="card-body"> Returned Id: {{userId}}</div>
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
//import { AUTH_REQUEST } from "actions/auth";
import axios from "axios";

export default {
  name: "register",
  data() {
    return {
      isCreated:false,
      name: "",
      email:"",
      age: 0,
      password: "",
      userId: null
    };
  },
  methods: {
    register: function() {    
      
    //To encrypt the password 	
    //let password_sha = hex_sha1(hex_sha1( this.password ));

  	//需要想后端发送的登录参数
  	const registerParam = {
        "name": this.name,
        "email":this.email,
        "age":this.age,
  			"password": this.password
  	}; 
    console.log(registerParam);
     //设置在登录状态
    this.isCreated = true;
    axios.post('/users/create',registerParam)
         .then(response => this.userId = response.data.id);
    console.log(this.userId);
    },
  }
};
</script>

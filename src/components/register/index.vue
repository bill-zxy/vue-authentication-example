/** * Created by Bill ZXY on 18/01/2021. */

<template>
  <div>
    <form class="register" @submit.prevent="register">
      <h1>Sign up</h1>
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
      <button type="submit">Sign Up</button>
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
      password: "dogy"
    };
  },
  methods: {
    register: function() {
      const { username, password } = this;
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

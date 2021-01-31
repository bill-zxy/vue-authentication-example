<template>
  <div id="app">
    <navigation />
    <div class="main-container">
      <center-container>
        <router-view />
      </center-container>
    </div>
    <sqreen-footer />
  </div>
</template>

<script>
import Navigation from "components/navigation";
import { USER_REQUEST } from "actions/user";
import SqreenFooter from "./components/footer/index.vue";

export default {
  components: {
    SqreenFooter,
    Navigation
  },
  name: "app",
  created: function() {
    var requestToken = local.Storage.getItem('abcd-token');
    this.$store.state=requestToken;
    if (this.$store.getters.isAuthenticated) {
      console.log("Moving into the user request procedure in App.vue");
      this.$store.dispatch(USER_REQUEST);
      this.$router.push('/mypage');
    } else {
      this.$store.dispatch(AUTH_REQUEST);
      this.$router.push('/');
    }
    console.log("Componnet App is created, and the token is "+requestToken);
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  color: #2e426b;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>

<style scoped>
.main-container {
  min-height: calc(100vh - 70px);
}
</style>

/** * Created by vouill on 11/13/17. */

<template>
  <div>
    <loading v-if="loading" />
    <div v-if="isAuthenticated">
//      <feed-item v-for="(feed, index) in fakeFeed" :key="index" :feed="feed" />
        <mypage />
    </div>
    <div v-if="!isAuthenticated && authStatus !== 'loading'">
      <h1>Welcome to Sign in!</h1>
      <login />
    </div>
  </div>
</template>

<style>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>

<script>
import fakeFeed from "./fakeFeed";
import FeedItem from "./feedItem.vue";
import { mapGetters } from "vuex";
import Login from "components/login";

export default {
  components: {
    Login,
    FeedItem
  },
  name: "home",
  created: function() {
    //if isAuthenticated, fetch my page directly;
    //if !isAuthenticated, 
  },
  computed: {
    ...mapGetters(["isAuthenticated", "authStatus"]),
    loading: function() {
      return this.authStatus === "loading" && !this.isAuthenticated;
    }
  },
  data() {
    return { fakeFeed };
  }
};
</script>

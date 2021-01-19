/** * Created by vouill on 11/13/17. */

<template>
  <div>
    <loading v-if="loading" />
    <div v-if="isAuthenticated">
      <feed-item v-for="(feed, index) in fakeFeed" :key="index" :feed="feed" />
    </div>
    <div v-if="!isAuthenticated && authStatus !== 'loading'">
      <h1>Welcome to DogeBook !</h1>
      <p>
        When meeting new doge friends is harder than ever, Dogebook closes the
        gap between all paws in the world
      </p>
      <register />
    </div>
  </div>
</template>

<style>
.home2 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>

<script>
import fakeFeed from "./fakeFeed";
import FeedItem from "./feedItem.vue";
import { mapGetters } from "vuex";
import Login from "components/register";

export default {
  components: {
    Register,
    FeedItem
  },
  name: "home2",
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

/** * Created by Bill Zhang on 1/23/2021. */

<template>
  <div class = "mypage">
     <p v-html="content"></p>
  </div>
</template>
<style>
.mypage {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>

<script>
import mapState from "vuex";
export default {
  name: "mypage",
  data() {
        return {
          post:"Hello World!"
        };
  },
 
  computed:mapState ({
    content:state => this.$store.state.data
    })
 };
</script>

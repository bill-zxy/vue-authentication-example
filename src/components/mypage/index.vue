/** * Created by Bill Zhang on 1/23/2021. */

<template>
  <div class = "mypage">
     <p v-html="getContent"></p>
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
import {mapState} from 'vuex';
export default {
  name: "mypage",
  data() {
        return {
          post:"Hello World!"
        }
  },
  created:function() {
    //if isAuthenticated, get page with token;
    //if !isAuthenticated, 
  },
  computed: mapState({
         content:state => state.page.data,
         getContent (state) {
           return state.page.data
         }
  })
 };
</script>

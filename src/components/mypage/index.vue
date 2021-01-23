/** * Created by Bill Zhang on 1/23/2021. */

<template>
  <div class = "mypage">
     <p v-html="msg">{{msg}}</p>
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
import axios from "axios";

export default {
  name: "mypage",
  data() {
        return {
          msg:"<h1 style='color:red'> Today's News</h1>"
        };
  },

  mounted:function(){
    axios.get('/usrs/news.html')
        .then((response) => {
            this.msg = response.data;
        });
  },
};
</script>

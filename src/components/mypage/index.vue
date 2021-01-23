/** * Created by Bill Zhang on 1/23/2021. */

<template>
  <div>
     <span v-html="msg"></span>
     <br>
     <span v-text="msg"></span>
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
export default {
  name: "mypage",
  data() {
        return {
          msg:"<h1> Welcome to your page!</h1>"
        };
  },
};
</script>

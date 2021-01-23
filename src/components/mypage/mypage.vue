/** * Created by Bill Zhang on 1/23/2021. */

<template>
  <div>
     <p v-html="msg"></p>
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
export default {
  name: "mypage",
  
  data() {
        return {;
          msg:"<h1> Welcome to your page!</h1>"
        };
  }
};
</script>

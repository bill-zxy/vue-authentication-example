/** * Created by Bill Zhang on 1/23/2021. */

<template>
  <div class = "mypage">
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{error}}
    </div>
    <div v-if="post" class="post">    
     <p v-html="post">{{post}}</p>
    </div> 
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
          loading:false,
          post:"Hello World!",
          error:null
        };
  },
  created() {
     console.log("My page is created!");
     this.fetchData()
  },
  watch:{
    '$route':'fetchData'
  },
  methods:{
     fetchData () {
       this.error = this.post = null;
       this.loading = true;
       const fetchedID = this.$route.params.id;
       console.log(fetchedID);
       //get the account from store
       post = this.$store.getPageData; 
       //set state status
       this.loading = false;
     },
  },
};
</script>

<template>
  <div class="loading-screen" >
    <img class="logo" :src="require(`@/assets/company.png`)" />
    <div class="loader"></div>
  </div>
</template>
<script>
export default {
  name: "loading-screen",
  components: {},
  data(){
    return {
      loading: false,
      interval: null,
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  created(){
    // this.loading = true
    // this.interval = setInterval(() => {
    //   this.loading = true
    //   this.$router.replace("/onboarding")
    // }, 3500)
    // return this.loading = true
  }

};
</script>
<style scoped>
.loading-screen {
  display: flex;
  justify-content: center;
  width: 100%;
  background: white;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}

.logo {
  margin-top: 225px;
  width: 280px;
  height: 134px;
  border: 2px solid white;
  border-radius: 15px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%), 0 6px 10px 0 rgb(0 0 0 / 10%);
}

.loader {
  position: fixed;
  bottom: 230px;
  border: 6px solid #DCDCDC;
  border-radius: 50%;
  border-top: 6px solid #3498db;
  width: 40px;
  height: 40px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
  position: absolute;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>

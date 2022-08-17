<template>
  <div class="onboarding-screen">
    <img v-if="counter == 1" class="logo" :src="require(`@/assets/handshake-1.png`)" />
    <img v-if="counter == 2" class="logo" :src="require(`@/assets/capture-1.png`)" />
    <img v-if="counter == 3" class="logo" :src="require(`@/assets/sync-1.png`)" />
    <span v-if="counter == 1" class="info">Meet</span>
    <span v-if="counter == 2" class="info">Capture</span>
    <span v-if="counter == 3" class="info">Sync</span>
    <div class="dots">
      <div class="dot" :class="counter == 1 && 'active '"></div>
      <div class="dot" :class="counter == 2 && 'active '"></div>
      <div class="dot" :class="counter == 3 && 'active '"></div>
    </div>
    <button @click.prevent="next">Proceed</button>
  </div>
</template>
<script>
export default {
  name: "onboarding-screen",
  components: {},
  data() {
    return {
      counter: 1,
      page: 'main'
    };
  },
  watch: {
    counter(value){
      if(value > 3){
        this.$router.replace("/login")
      }
    }
  },
  methods:{
    next(){
      this.counter += 1 
    }
  }
};
</script>
<style scoped>
.onboarding-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}
.info{
  font-weight: 900;
  color: #595959;
  font-size: 23px;
  margin: 5px
}
.logo {
  height: 165px;
  object-fit: contain;
  border: 2px solid white;
  border-radius: 15px;
  background-color: white;
}
.onboarding {
  margin-bottom: 15px;
  width: 300px;
  height: 200px;
  object-fit: cover;
  border: 2px solid white;
  border-radius: 15px;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
}
button {
  background-color: #5DA3DA;
  color: white;
  width: 280px;
  padding: 8px 0px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%), 0 6px 10px 0 rgb(0 0 0 / 10%);
}
.dots{
  display: flex;
  flex-direction: row;
  gap: 2;
  margin: 3px
}

.dot{
  width: 13px;
  height: 13px;
  margin: 5px;
  border-radius: 50%;
  background-color: #A9ABAD;
}

.dots > .active{
  background-color: #bed959;
}
</style>

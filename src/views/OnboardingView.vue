<template>
  <div
    class="onboarding-screen"
    :style="{
      'background-image': 'url(' + require(`@/assets/cover.jpg`) + ')',
    }"
  >
    <img v-if="counter == 1" class="logo" :src="require(`@/assets/meet.png`)" />
    <img v-if="counter == 2" class="logo" :src="require(`@/assets/capture.gif`)" />
    <img v-if="counter == 3" class="logo" :src="require(`@/assets/sync.png`)" />
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
    };
  },
  watch: {
    counter(value){
      if(value > 3){
        this.$router.replace("/pincode")
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
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}

.info{
  font-weight: bold;
  color: white;
  font-size: 27px
}

.logo {
  margin-bottom: 10px;
  width: 300px;
  height: 200px;
  object-fit: contain;
  border: 2px solid white;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%), 0 6px 10px 0 rgb(0 0 0 / 10%);
}

.onboarding > img:nth-child(1) {
  margin-bottom: 15px;
  width: 300px;
  height: 200px;
  object-fit: cover;
  border: 2px solid white;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%), 0 6px 10px 0 rgb(0 0 0 / 10%);
}

button {
  background-color: #81B622;
  color: white;
  width: 300px;
  padding: 10px 17px;
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
}

.dot{
  width: 17px;
  height: 17px;
  margin: 5px;
  border-radius: 50%;
  background-color: white;
}

.dots > .active{
  background-color: #2e8bc0;
}
</style>

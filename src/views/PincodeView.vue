<template>
  <div class="pin-view">
    <div class="info">
      <img class="logo" :src="require(`@/assets/company-logo.png`)" />
      <span>ELS Philippines Inc.</span>
      <span>Provincial Sales Network</span>
    </div>
    <div class="pin">
      <code-input
        @complete="completed = true"
        :fields="4"
        :fieldWidth="56"
        :fieldHeight="56"
        :required="true"
      />
    </div>
  </div>
</template>
<script>
import CodeInput from "../components/CodeInput.vue";
export default {
  name: "pinview",
  data() {
    return {
      completed: false,
    };
  },
  watch: {
    completed(value) {
      if (value) {
        this.$router.replace("/app");
      }
    },
  },
  components: { CodeInput },
};
</script>
<style scoped>
.pin-view {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
}
.ss {
  padding: 10px;
  border: 1px solid #ddd;
  width: 70px;
  height: 70px;
  text-align: center;
  font-size: 30px;
}

.logo {
  margin-bottom: 3px;
  width: 130px;
  border: 2px solid white;
  border-radius: 15px;
}
.info{
  margin-top: -100px;
  display: flex;
  color: #595959;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  gap: 2;
}

.info > span:nth-child(3){
  font-size: 14px;
  margin-bottom: 5px;
}
.info > span:nth-child(2){
  font-size: 18px;
  font-weight: bold;
}
</style>

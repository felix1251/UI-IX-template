<template>
  <div class="main">
    <div class="mobile-phone">
      <div class="screen">
        <div class="head">
          <div class="brove">
          <span class="speaker"></span>
        </div>
        </div>
        <div class="phone-header">
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFooter: false,
    };
  },
  watch: {
    $route(n) {
      if (n.name != "home") {
        this.showFooter = true;
      } else {
        this.showFooter = false;
      }
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 90vh;
  font-family: "Audiowide", sans-serif;
}

.mobile-phone {
  margin: auto;
  padding: 10px 10px 30px;
  width: 325px;
  height: 700px;
  box-shadow: 0 0 20px #e2e2e2;
  border-radius: 30px;
  background: black;
}

.screen {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow-y: auto;
  position: relative;
  flex-direction: row;
}

.phone-header {
  width: 100%;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  position: absolute;
}

.icon{
  width: 10px;
  height: 10px;
  background: black
}

.brove {
  width: 125px;
  height: 25px;
  background: black;
  position: absolute;
  border-radius: 0 0 20px 20px;
  z-index: 2;
}

.head{
  display: flex;
  justify-content: center;
}

.speaker {
  width: 55px;
  height: 4px;
  background: #d2d2d2;
  display: block;
  margin: auto;
  margin-top: 5px;
}
</style>

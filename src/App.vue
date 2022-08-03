<template>
  <div class="main">
    <div class="mobile-phone">
      <div class="brove"><span class="speaker"></span></div>
      <div class="screen">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center
}

.mobile-phone {
  margin: auto;
  padding: 10px 10px 30px;
  width: 330px;
  height: 660px;
  box-shadow: 0 0 20px #e2e2e2;
  border-radius: 30px;
  background: black;
}

.screen {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  border-radius: 30px;
  overflow-y: auto;
}

.brove {
  width: 150px;
  height: 20px;
  background: black;
  position: absolute;
  margin: 0 90px;
  border-radius: 0 0 20px 20px;
}

.speaker {
  width: 60px;
  height: 5px;
  background: #d2d2d2;
  display: block;
  margin: auto;
  margin-top: 5px;
  border-radius: 20px;
}
</style>


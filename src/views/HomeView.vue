<template>
  <div class="home">
    <div class="app-list">
      <div class="app-container">
        <router-link to="/loading-screen" exact>
          <div class="app">
            <img class="logo" :src="require(`@/assets/app-logo.png`)" />
          </div>
        </router-link>
        <span>ELS PSN</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    109.6deg,
    rgba(156, 252, 248, 1) 11.2%,
    rgba(110, 123, 251, 1) 91.1%
  );
}

.app-list {
  display: flex;
  gap: 1rem;
  padding: 50px 20px;
}

.app-container {
  gap: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app {
  background-image: linear-gradient(to left, #8bcd50, #2e8bc0);
  width: 50px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
}

.app > .logo{
  width: 50px;
  height: 50px;
}

.app-container > span {
  font-size: 11px;
  font-weight: bold;
}
</style>

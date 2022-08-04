<template>
  <div class="home">
    <div class="app-list">
      <div class="app-container">
        <router-link to="/about" exact>
          <div class="app"></div>
        </router-link>
        <span>App</span>
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
  background-image: linear-gradient(to right, #ff9966, #ff5e62);
  width: 50px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
}

.app-container > span {
  font-size: 11px;
  font-weight: bold;
}
</style>

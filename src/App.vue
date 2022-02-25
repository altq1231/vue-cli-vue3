<template>
  <div class="nav-container">
    <router-link to="/">Home</router-link> | <router-link to="/setting">setting</router-link> |
    <router-link to="/num-scroll">num-scroll</router-link> |
    <router-link to="/login">login</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in" appear>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @text-color;
}

.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
}
</style>

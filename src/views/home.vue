<template>
  <div class="home-page">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home-page",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped lang="less">
.home-page {
  width: 100%;
  padding: 20px 40px;
  .common-title {
    height: 50px;
    font-size: 18px;
    color: @primary-color;
    line-height: 50px;
    font-weight: bold;
    border-bottom: 1px solid @border-color-base;
  }
}
</style>

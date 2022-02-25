<template>
  <div class="home-page">home</div>
</template>

<script>
export default {
  name: "home-page",
  components: {},
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

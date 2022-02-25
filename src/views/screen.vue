<template>
  <div class="home-page">
    <router-link to="/login"> <a-button type="primary">去登录</a-button></router-link>
    <div class="common-title">我的大屏</div>
    <div class="screen-items-container flex-row">
      <div class="screen-item"></div>
    </div>
    <div class="common-title">大屏模板</div>
    <div class="screen-items-container flex-row">
      <div class="screen-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "screen-page",
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

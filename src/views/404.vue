<template>
  <div class="nothing-page flex-col">
    <div class="top-tips flex-row">
      <img class="run-img" src="@/assets/web404.svg" />
      <div class="right-info">
        <h1>Oops！Error <span>404</span>…</h1>
        <p>We are sorry , the page you requested cannot be found.</p>
        <a href="/"> <a-button type="primary">回首页</a-button></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "404-page",
};
</script>

<template>
  <div class="num-scrolling-page">
    <div class="page-title">数字滚动</div>
    <div class="common-title">示例1 简单的过度</div>
    <div class="test-case">
      <div class="flex-row num-container">
        <span>￥</span>
        <transition-group name="list" tag="p">
          <p style="display: inline-block" v-for="(item, index) in todayAmountComputed" :key="item + index">
            {{ item }}
          </p>
        </transition-group>
      </div>
    </div>
    <div class="common-title">示例2 覆盖离开的数字</div>
    <div class="test-case">
      <div class="flex-row num-container">
        <span>￥</span>
        <transition-group name="list" tag="div" class="transition-container flex-row">
          <div
            class="transition-item"
            v-for="(item, index) in todayAmountComputed"
            :style="{
              left: index * 53 + 'px',
            }"
            :key="item + index"
          >
            {{ item }}
          </div>
        </transition-group>
      </div>
    </div>
    <div class="common-title">示例3 注入灵魂-添加延迟</div>
    <div class="test-case">
      <div class="flex-row num-container">
        <span>￥</span>
        <transition-group name="list" tag="div" class="transition-container flex-row">
          <div
            class="transition-item"
            v-for="(item, index) in todayAmountComputed"
            :style="{
              left: index * 53 + 'px',
              'transition-delay': 0.1 * index + 's',
            }"
            :key="item + index"
          >
            {{ item }}
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumScrolling",
  data() {
    return {
      todayAmount: "0",
    };
  },
  computed: {
    todayAmountComputed() {
      return this.todayAmount.split("");
    },
  },
  mounted() {
    setInterval(() => {
      if (this.todayAmount === "0") {
        this.todayAmount = "1000";
      }
      this.todayAmount = "" + Math.floor(Math.random() * 10000);
    }, 2000);
  },
};
</script>
<style scoped lang="less">
.num-scrolling-page {
  width: 100%;
  padding: 20px 40px;

  .page-title {
    height: 60px;
    font-size: 20px;
    color: @primary-color;
    line-height: 60px;
    font-weight: bold;
    border-bottom: 1px solid @border-color-base;
    margin-bottom: 20px;
  }
  .common-title {
    height: 50px;
    font-size: 18px;
    color: @primary-color;
    line-height: 50px;
    border-bottom: 1px solid @border-color-base;
    margin-bottom: 20px;
  }

  .test-case {
    padding-top: 20px;
    margin-bottom: 80px;
  }

  .num-container {
    font-size: 85px;
    display: flex;
    color: gold;
    .transition-container {
      position: relative;
    }
    .transition-item {
      flex: 0 0 53px;
      width: 53px;
      position: absolute;
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: transform 1s ease, opacity 1s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(50%);
}

.list-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}
</style>

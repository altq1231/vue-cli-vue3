<template>
  <div class="flex-col basic-layout">
    <div class="layout-header">
      <div class="header-container common-width-container flex-row">
        <router-link class="left-link" to="/"><img class="left-logo-img" src="@/assets/logo.svg" alt="logo" /></router-link>

        <div class="left-title-container flex-row fill-flex">Hello {{ username }}</div>
        <div class="right-time-info flex-row">
          <!-- <a-dropdown :trigger="['click']" :overlayStyle="{ width: '7rem' }">
            <a class="ant-dropdown-link" @click.prevent> {{ username }} </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="0" @click="goToPage('/')"> 个人中心 </a-menu-item>
                <a-menu-item key="1" @click="goToPage('/setting')"> 个人设置 </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="3" @click="logout">退出登录</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown> -->
          <!-- <Dropdown overlay={menu} overlayStyle={{ width: '7rem' }}>
                <a
                  class="user-avatar-link flex-row"
                  onClick={(e) => e.preventDefault()}
                >
                  {userAvatar && userAvatar.length > 0 ? (
                    <Avatar
                      shape="square"
                      src={
                        <img alt="logo" class="logo-img" src={logoImg} />
                      }
                    />
                  ) : (
                    <Avatar
                      style={{
                        backgroundColor: avatarColor ? avatarColor : '#ccc',
                        verticalAlign: 'middle',
                      }}
                      shape="square"
                      icon={<UserOutlined />}
                    ></Avatar>
                  )}

                  <span class="user-nick-name">{userNickname}</span>
                </a>
              </Dropdown> -->
        </div>
      </div>
    </div>

    <div class="fill-flex bottom-main-container">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in" appear>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "basic-layout",
  setup() {
    const username = ref("admin");

    //router是全局路由对象，route= userRoute()是当前路由对象
    let router = useRouter();
    const logout = () => {
      sessionStorage.removeItem("jwt");
      router.push({
        //传递参数使用query的话，指定path或者name都行，但使用params的话，只能使用name指定
        path: "/login",
      });
    };

    const goToPage = (path) => {
      router.push({
        //传递参数使用query的话，指定path或者name都行，但使用params的话，只能使用name指定
        path: path,
      });
    };

    const state = reactive({
      transitionName: "slide-left",
    });
    router.beforeEach((to, from) => {
      if (to.meta.index > from.meta.index) {
        console.log(1);
        state.transitionName = "slide-left"; // 向左滑动
      } else if (to.meta.index < from.meta.index) {
        // 由次级到主级
        console.log(2);
        state.transitionName = "slide-right";
      } else {
        state.transitionName = ""; // 同级无过渡效果
      }
    });

    return {
      username,
      goToPage,
      logout,

      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
.basic-layout {
  .layout-header {
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 2.5rem;
    position: sticky;
    top: 0;
    color: @text-color;
    background: #fafafa;
    -webkit-backdrop-filter: saturate(180%) blur(1rem);
    backdrop-filter: saturate(180%) blur(1rem);
    overflow: hidden;

    .header-container {
      align-items: center;
      height: 100%;
      overflow: hidden;

      .left-link {
        flex: 0 0 1.5rem;
        height: 1.5rem;
        margin-right: 2rem;
        cursor: pointer;
      }
      .left-logo-img {
        flex: 0 0 1.5rem;
        height: 1.5rem;
        cursor: pointer;
      }

      .left-title-container {
        align-items: center;
        margin-right: 1rem;
        height: 1.2rem;
        overflow: hidden;
        font-size: 0.8rem;
        color: @text-color;
      }

      .right-time-info {
        height: 1.5rem;
        border-radius: 0.2rem;
        align-items: center;

        .logo-img {
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 0.2rem;
          padding: 0.25rem 0;
        }

        .user-avatar-link {
          align-items: center;
          color: @text-color;
          font-size: 0.7rem;

          .user-nick-name {
            margin-left: 0.5rem;
          }

          .ant-avatar {
            width: 1.5rem;
            height: 1.5rem;
            line-height: 1.5rem;
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  .bottom-main-container {
    width: 100%;
  }
}
</style>

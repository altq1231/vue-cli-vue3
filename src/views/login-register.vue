<template>
  <div class="login-page">
    <div class="center-form-container">
      <img class="logo-img" src="@/assets/avatar.gif" />
      <el-form :model="param" :rules="rules" ref="loginRef" label-position="top" label-width="100px">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="param.username" placeholder="username"> </el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input type="password" placeholder="password" v-model="param.password" @keyup.enter="submitForm()"> </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
      </el-form>
    </div>
    <div class="login-bg"></div>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
// import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { getAllUserInfo, login } from "@/service/user";
export default {
  setup() {
    // const router = useRouter();
    const param = reactive({
      username: "admin",
      password: "123123",
    });
    const rules = {
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    };
    const loginRef = ref(null);
    const testFun = async () => {
      const response = await getAllUserInfo();
      console.log(response);
    };
    const submitForm = () => {
      loginRef.value.validate((valid) => {
        login({
          userName: param.username,
          userPwd: param.password,
        })
          .then((res) => {
            console.log("res", res);
          })
          .catch((e) => {
            console.log("ee", e);
          });

        // console.log(1111, response);
        if (valid) {
          ElMessage.success("登录成功");
          sessionStorage.setItem("jwt", param.userName);
          // router.push("/");
        } else {
          ElMessage.error("登录错误");
          return false;
        }
      });
    };
    return {
      param,
      rules,
      loginRef,
      submitForm,
      testFun,
    };
  },
};
</script>
<style lang="less" scoped>
.login-page {
  overflow: hidden;
  height: 100vh;
  background: url("@/assets/img/bg2.jpeg") no-repeat;
  background-position: center;
  position: relative;

  .login-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: saturate(180%) blur(10px);
    z-index: 1;
    pointer-events: none;
    transition: all 0.3s;
  }

  .center-form-container {
    position: relative;
    z-index: 3;
    width: 400px;
    border-radius: 4px;
    background-color: #f1f1f1;
    padding: 40px;
    margin: 8rem auto 0;

    &:hover {
      & + .login-bg {
        backdrop-filter: saturate(180%) blur(0);
      }
    }

    .login-btn {
      margin-top: 60px;
      .el-button {
        width: 100%;
      }
    }

    .logo-img {
      height: 90px;
      width: 90px;
      object-fit: cover;
      border-radius: 20px;
      margin: 0 auto 40px;
      display: block;
    }
  }
}
</style>

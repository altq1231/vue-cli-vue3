<template>
  <div class="login-page flex-row">登录</div>
</template>
<script>
// import { reactive, ref, toRaw } from "vue";
// import { useRouter } from "vue-router";
// import { login, register, getUserInfo } from "@/service/user";
// import { message } from "ant-design-vue";

export default {
  setup() {
    // let router = useRouter();
    // const formRef = ref();
    // const activeKey = ref("1");
    // const formState = reactive({
    //   userName: "",
    //   userPwd: "",
    // });
    // const rules = {
    //   userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    //   userPwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
    // };
    // const onSubmit = () => {
    //   formRef.value
    //     .validate()
    //     .then(async () => {
    //       const formData = toRaw(formState);
    //       const response = await login({
    //         userName: formData.userName,
    //         userPwd: formData.userPwd,
    //       });
    //       console.log("server res", response);
    //       if (response.state) {
    //         message.success(`欢迎你 ${response.data.userName}`);
    //         sessionStorage.setItem("jwt", formData.userName);
    //         router.push({
    //           //传递参数使用query的话，指定path或者name都行，但使用params的话，只能使用name指定
    //           path: "/",
    //         });
    //       } else {
    //         message.error(response.msg);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log("server error", error);
    //     });
    // };
    // const resetForm = () => {
    //   formRef.value.resetFields();
    // };
    return {
      // labelCol: { span: 6 },
      // wrapperCol: { span: 18 },
      // formRef,
      // formState,
      // rules,
      // onSubmit,
      // resetForm,
      // activeKey,
    };
  },
};
</script>
<style lang="less" scoped>
.login-page {
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  .login-form {
    height: 300px;
    width: 400px;
    border-radius: 4px;
    background-color: #f1f1f1;
    padding: 20px 40px;

    :deep(.ant-tabs-bar) {
      margin-bottom: 30px;
    }
    .login-btn {
      float: right;
      width: 120px;
    }

    .home-link {
      align-items: center;
      justify-content: center;
      font-size: 14px;
      a {
        color: @text-color;
        line-height: 22px;
        &:hover {
          color: @primary-color;
        }
      }
    }
  }
}
</style>

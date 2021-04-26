<template>
  <div>
    <SwForm :model="userInfo" :rules="rules" ref="swform">
      <SwFormItem label="用户名：" prop="acc">
        <SwFormInput
          v-model="userInfo.acc"
          placeholder="请输入用户名"
        ></SwFormInput>
      </SwFormItem>
      <SwFormItem label="密码：" prop="pwd">
        <SwFormInput
          v-model="userInfo.pwd"
          placeholder="请输入密码"
        ></SwFormInput>
      </SwFormItem>
      <SwFormItem>
        <button @click="login">登录</button>
      </SwFormItem>
    </SwForm>
    <!-- 测试双向绑定 -->
    <p>{{ userInfo.acc }}</p>
  </div>
</template>

<script>
import SwFormInput from "./SwFormInput";
import SwFormItem from "./SwFormItem";
import SwForm from "./SwForm";
export default {
  components: { SwFormInput, SwFormItem, SwForm },
  data() {
    return {
      userInfo: {
        acc: "",
        pwd: "",
      },
      rules: {
        acc: [
          {
            required: true,
            message: "用户名不低于5位不超过10位",
            min: 5,
            max: 10,
          },
        ],
        pwd: [
          {
            required: true,
            message: "密码不低于5位不超过10位",
            min: 5,
            max: 10,
          },
        ],
      },
    };
  },
  methods: {
    login() {
      // 找到SwForm实例，调用它的validate方法，会得到结果 ->  成功或者失败
      this.$refs.swform.validate((result) => {
        if (result) {
          alert("suc");
        } else {
          alert("err");
        }
      });
    },
  },
};
</script>
<style scoped>
button {
  margin-left: 100px;
  margin-top: 10px;
}
</style>
<template>
  <div v-if="isShow">
    <!-- 标题 -->
    <h3>{{ title }}</h3>
    <!-- 内容 -->
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    duration: {
      // 延迟时间：多久之后关闭弹框(毫秒)
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      isShow: false, // 是否显示自己
    };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(this.hide, this.duration); // 指定时间之后执行hide方法
    },
    hide() {
      this.isShow = false; // 隐藏自己
      this.remove(); // 从body中卸载销毁自己 ->  写在创造方法中的
    },
  },
};
</script>

<style scoped>
div {
  position: fixed;
  min-width: 200px;
  top: 16px;
  left: 40%;
  text-align: center;
  pointer-events: none;
  background-color: greenyellow;
}
</style>
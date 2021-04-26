<template>
  <div>
    <button @click="click">开启</button>
  </div>
</template>

<script>
import SwMsgbox from "@/components/messageBox/SwMsgBox";
export default {
  methods: {
    click() {
      // this.$swCreateBox(SwMsgbox, {
      //   title: "pyy",
      //   content: "成功！",
      //   duration: 3000,
      // }).show();
      this.$swExtendBox(SwMsgbox, {
        title: "wyz",
        content: "成功！",
        duration: 3000,
      }).show();
    },
  },
};
</script>

<style scoped>
</style>
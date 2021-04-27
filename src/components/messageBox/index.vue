<template>
  <div>
    <button @click="click">开启</button>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      // this.$swCreateBox({
      //   title: "pyy",
      //   content: "成功！",
      //   duration: 3000,
      // }).show();
      this.$swExtendBox({
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
<template>
  <!-- 因为可能不同的input传递的属性是不一样的，所以使用$attrs来展开获得 -->
  <input type="text" @input="input" v-bind="$attrs" @change="change" />
</template>

<script>
import emitter from "@/mixins/emitter.js";
export default {
  mixins: [emitter],
  inheritAttrs: false, // 关闭属性继承，避免设置到根元素上
  methods: {
    input() {
      // 实现双向绑定需要实现： 1.:value  2. 监听input事件
      this.$emit("input", event.target.value);
    },
    change() {
      // this.dispatch：  参数1： 组件的componentName  参数2： 触发的方法
      // 在需要触发的组件中 写上componentName，注意不是name
      this.dispatch("SwFormItem", "validate");
    },
  },
};
</script>
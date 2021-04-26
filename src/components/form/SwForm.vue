<template>
  <div>
    <!-- 插槽： 显示标签内所有的内容 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: "SwForm",
  provide() {
    // 提供的意思
    // 隔代传参，用法类似于data
    return {
      form: this, // 把组件实例本身提供给子孙组件
    };
  },
  data() {
    return {
      field: [], // 用来存放所有需要校验的SwFormItem组件
    };
  },
  props: {
    model: {
      // 使用SwForm时候传递的所有数据
      type: Object,
      require: true,
    },
    rules: {
      // 使用SwForm时候传递的所有验证规则
      type: Object,
    },
  },
  created() {
    this.$on("formItenField", (item) => {
      this.field.push(item);
    });
  },
  methods: {
    validate(callback) {
      // 遍历所有儿子中含有prop属性的，然后执行他们的validate方法 ->  方法会返回promise ->  放到一个数组validates中
      const validates = this.field.map((item) => item.validate());
      Promise.all(validates) // 使用all方法全部执行，全部成功才算校验通过，有一个失败就失败
        .then(() => callback(true))
        .catch(() => callback(false));
    },
  },
};
</script>
<style scoped>
div {
  text-align: left;
  width: 500px;
  margin: 0 auto;
}
</style>
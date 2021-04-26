<template>
  <div>
    <!-- label标签 -->
    <label v-if="label">{{ label }}</label>
    <!-- 插槽：SwFormInput的位置 -->
    <slot></slot>
    <!-- 验证不通过时候的信息 -->
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import emitter from "@/mixins/emitter";
import Schema from "async-validator";
export default {
  mixins: [emitter],
  componentName: "SwFormItem",

  inject: ["form"], // 注入,注入需要的属性
  data() {
    return {
      error: "", // 验证失败的提示信息，应该是这个组件自己的状态，所以就让组件自己来维护
    };
  },
  props: {
    // label标签
    label: {
      type: String,
      default: "",
    },
    prop: {
      // 字段名 根据字段名 来获得值  -> SwFrom中已经把整个实例传递了这儿可以拿取到
      type: String,
      default: "",
    },
  },
  mounted() {
    // 监听验证的通知进行验证
    this.$on("validate", () => {
      this.validate().catch(() => {
        // 为了防止promise错误不被捕获而报错
        console.log();
      });
    });
    if (this.prop) {
      // 如果有prop属性 那么就代表需要进行验证
      // 派发事件通知SwForm，在SwForm中新增自己 ->  把自己传递过去
      this.dispatch("SwForm", "formItenField", [this]);
    }
  },
  methods: {
    validate() {
      // 获取规则并执⾏校验
      // 拿取值
      const value = this.form.model[this.prop];
      // 拿取校验规则
      const rule = this.form.rules[this.prop];
      // 创建校验器
      // Schema的参数：key是校验字段，value是校验规则
      const validator = new Schema({ [this.prop]: rule });
      // 执行校验, 返回Promise，没有触发catch就说明验证通过
      return new Promise((resolve, reject) => {
        // validate参数： key是校验字段， value是校验值
        validator.validate({ [this.prop]: value }, (err) => {
          if (err) {
            // 如果有错误，校验失败
            this.error = err[0].message;
            reject(err[0].message); // 抛出错误
          } else {
            this.error = "";
            resolve();
          }
        });
      });
    },
  },
};
</script>
<style scoped>
div {
  height: 50px;
}
p {
  font-size: 12px;
  color: red;
  /* line-height: 12px; */
  margin-top: 5px;
  padding-left: 100px;
}
label {
  width: 100px;
  text-align: right;
  display: inline-block;
}
</style>
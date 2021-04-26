# my-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## form用法示例：
```
<SwForm :model='userInfo' :rules="rules" ref='swform'>
  <SwFormItem label="用户名：" prop='acc'>
    <SwFormInput
      v-model="userInfo.acc"
      placeholder="请输入用户名"
    ></SwFormInput>
  </SwFormItem>
  <SwFormItem label="密码：" prop='pwd'>
    <SwFormInput
      type="password"
      v-model="userInfo.pwd"
      placeholder="请输入用户名"
    ></SwFormInput>
  </SwFormItem>
  <SwFormItem>
      <button @click="login">登录</button>
  </SwFormItem>
</SwForm>
```

```
data() {
    return {
      userInfo: {
        acc: "",
        pwd: "",
      },
      rules: {
        acc: [{ required: true, message: "用户名不得低于5位", min: 5 }],
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
```



## 弹框用法示例

```
import SwMsgbox from "@/components/messageBox/SwMsgBox";

this.$swCreateBox(SwMsgbox, {
    title: "pyy",
    content: "成功！",
    duration: 3000,
}).show();
```


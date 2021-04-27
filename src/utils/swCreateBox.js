import Vue from 'vue';
import SwMsgbox from "@/components/messageBox/SwMsgBox";

// 创建一个函数，动态生成组件实例挂载到body上
// Component:是组件配置对象
function swCreateBox(Component, props) {
    // 创建⼀个Vue新实例：借用Vue构造函数来动态生成这个组件实例
    const vm = new Vue({
        render(h) { //  render函数将传⼊组件配置对象转换为虚拟dom
            // h是createElement别名，返回一个虚拟dom（VNode）
            return h(Component, { props });
        }
    });
    // 执⾏挂载函数，但未指定挂载⽬标，表示只执⾏初始化⼯作，可以得到真实dom
    vm.$mount();
    // 通过$el属性获取真实dom元素再添加到body
    document.body.appendChild(vm.$el);
    // 得到组件实例
    const mycomponent = vm.$children[0];
    //  再给组件实例添加销毁⽅法
    mycomponent.remove = () => {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    };
    return mycomponent;
}

// 使⽤插件进⼀步封装便于使⽤
export default {
    install(Vue) {
        Vue.prototype.$swCreateBox = function (options) {
            return swCreateBox(SwMsgbox, options);
        }
    }
}

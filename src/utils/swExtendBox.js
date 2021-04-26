import Vue from 'vue';

function swExtendBox(Component, props) {
    // 利用vue的extend()方法来得到组件的构造函数
    const MyConstructor = Vue.extend(Component);
    // 通过构造函数创建组件实例，并传递prop参数
    const mycomponent = new MyConstructor({ propsData: props });
    // 执⾏挂载函数来得到真实dom
    mycomponent.$mount();
    // 通过组件的$el属性获取真实dom元素再添加到body
    document.body.appendChild(mycomponent.$el);
    // 给弹框添加销毁⽅法
    mycomponent.remove = () => {
        document.body.removeChild(mycomponent.$el);
        mycomponent.$destroy();
    };
    return mycomponent;
}

export default swExtendBox;
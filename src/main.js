import Vue from 'vue'
import App from './App.vue'
import swCreateBox from '@/utils/swCreateBox.js'
import swExtendBox from '@/utils/swExtendBox.js'

Vue.config.productionTip = false

Vue.prototype.$swCreateBox = swCreateBox;
Vue.prototype.$swExtendBox = swExtendBox;

// new Vue结果是根实例 -> $root
// App是根组件
new Vue({
  render: h => h(App),
}).$mount('#app')

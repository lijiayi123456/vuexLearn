import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,    // 将我们创建的Vuex实例挂载到这个vue实例中
  render: h => h(App),
}).$mount('#app')

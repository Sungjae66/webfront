import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios"
import './mock/index'
import * as echarts from 'echarts'
import $ from 'jquery'
import dataV from '@jiaminghi/data-view'

Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios
Vue.use(ElementUI);
Vue.use(dataV)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

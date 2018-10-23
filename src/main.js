// 引入样式文件
import 'assets/sass/index.sass';
// fastclick插件
import fastclick from 'fastclick';
import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

fastclick.attach(document.body);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

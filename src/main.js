// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';

import Vue from 'vue';
import App from './App';
import router from './router';

import Session from './session';

Vue.use(KeenUI);

Vue.config.productionTip = false;

Vue.prototype.$session = new Session();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

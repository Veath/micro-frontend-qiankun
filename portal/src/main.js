import { registerMicroApps, start } from 'qiankun';
import elementUI from 'element-ui';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(elementUI);

const instance = new Vue({
  router,
  data() {
    return { appContent: '' };
  },
  store,
  template: '<App :appContent="appContent"/>',
  components: { App }
}).$mount('#portal');

function render({ appContent }) {
  instance.appContent = appContent;
}

function genActiveRule(routerPrefix) {
  return location =>
    location.pathname.startsWith(routerPrefix) ||
    ~location.hash.indexOf(routerPrefix);
}

registerMicroApps(
  [
    {
      name: 'vue app',
      entry: '//localhost:8081',
      render,
      activeRule: genActiveRule('/vue')
    }
  ],
  {
    beforeLoad: [
      async app => {
        console.log('before load', app);
      }
    ],
    beforeMount: [
      async app => {
        console.log('before mount', app);
      }
    ],
    afterMount: [
      async app => {
        console.log('before mount', app);
      }
    ],
    afterUnmount: [
      async app => {
        console.log('after unload', app);
        instance.appContent = '';
      }
    ]
  }
);

start({ prefetch: false, jsSandbox: true });

import Vue from 'vue';
import elementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(elementUI);

let instance = null;

console.log('micro-a main window -->', window);

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main portal', props);
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#vue');
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}

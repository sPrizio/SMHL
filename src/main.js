import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false;

Vue.mixin({
    data: function () {
        return {
          get domain() {
            return 'http://localhost:8080/'
          }
        }
    }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

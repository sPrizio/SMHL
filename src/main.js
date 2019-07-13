import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './../node_modules/bulma/css/bulma.css'
import VueProgress from 'vue-progress';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueProgress);

Vue.mixin({
    data: function () {
        return {
            get domain() {
                return 'http://localhost:8080/'
            },
            get cs() {
                let t = new Date();

                if (t.getMonth() < 8) {
                    return (t.getFullYear() - 1).toString() + '-' + (t.getFullYear()).toString()
                } else {
                    return (t.getFullYear()).toString() + '-' + (t.getFullYear() + 1).toString()
                }
            },
            get recentGamesLimit() {
                return 5;
            }
        }
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

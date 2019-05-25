import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Skaters from "./views/participant/Skaters";
import Goalies from "./views/participant/Goalies";
import Teams from "./views/participant/Teams";
import Stats from "./views/Stats";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/skaters',
            name: 'skaters',
            component: Skaters
        },
        {
            path: '/goalies',
            name: 'goalies',
            component: Goalies
        },
        {
            path: '/standings',
            name: 'standings',
            component: Teams
        },
        {
            path: '/stats',
            name: 'stats',
            component: Stats
        }
    ]
})

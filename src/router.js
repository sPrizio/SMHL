import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Skaters from "./views/participant/skater/Skaters";
import Goalies from "./views/participant/goalie/Goalies";
import Teams from "./views/participant/Teams";
import Stats from "./views/Stats";
import Skater from "./views/participant/skater/Skater";
import Goalie from "./views/participant/goalie/Goalie";
import Scores from "./views/Scores";

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
        },
        {
            path: '/skater/:id',
            name: 'skater',
            component: Skater
        },
        {
            path: '/goalie/:id',
            name: 'goalie',
            component: Goalie
        },
        {
            path: '/scores',
            name: 'scores',
            component: Scores
        }
    ]
})

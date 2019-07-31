import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Skaters from "./views/participant/skater/Skaters";
import Goalies from "./views/participant/goalie/Goalies";
import Teams from "./views/participant/team/Teams";
import Stats from "./views/Stats";
import Skater from "./views/participant/skater/Skater";
import Goalie from "./views/participant/goalie/Goalie";
import Scores from "./views/Scores";
import Game from "./views/game/Game";
import CreateGame from "./views/game/CreateGame";
import CompleteGame from "./views/game/CompleteGame";
import CreateTeam from "./views/participant/team/CreateTeam";
import CreateSkater from "./views/participant/skater/CreateSkater";
import CreateGoalie from "./views/participant/goalie/CreateGoalie";

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
        },
        {
            path: '/game/:id',
            name: 'game',
            component: Game
        },
        {
            path: '/create-game',
            name: 'createGame',
            component: CreateGame
        },
        {
            path: '/complete-game/:id',
            name: 'completeGame',
            component: CompleteGame
        },
        {
            path: '/create-skater',
            name: 'createSkater',
            component: CreateSkater
        },
        {
            path: '/create-goalie',
            name: 'createGoalie',
            component: CreateGoalie
        },
        {
            path: '/create-team',
            name: 'createTeam',
            component: CreateTeam
        },
    ]
})

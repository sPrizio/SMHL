<template>
    <div id="stats" class="view">
        <section class="hero is-small">
            <div class="hero-body">
                <div class="container">
                    <br/>
                    <div class="columns is-multiline">
                        <div class="column is-12-desktop is-12-tablet is-12-mobile">
                            <h1 class="title">
                                Stats
                            </h1>
                            <h2 class="subtitle">
                                An overview of this season's statistical leaders
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="tabs is-large">
                <ul>
                    <li v-bind:class="playersActive" v-on:click="swapTabs">
                        <a>Players</a>
                    </li>
                    <li v-bind:class="goaliesActive" v-on:click="swapTabs">
                        <a>Goalies</a>
                    </li>
                </ul>
            </div>

            <!-- stats -->
            <div v-if="activeTab === 'players'">
                <SkaterStats :top-points="topPoints" :top-goals="topGoals" :top-assists="topAssists" :top-ppg="topPpg"/>
            </div>
            <div v-else-if="activeTab === 'goalies'">
                <GoalieStats :top-wins="topWins" :top-save-percentage="topSavePercentage" :top-goals-against-average="topGoalsAgainstAverage" />
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import SkaterStats from '../components/stats/SkaterStats';
    import GoalieStats from "../components/stats/GoalieStats";

    export default {
        name: "Stats",
        components: {
            GoalieStats,
            SkaterStats
        },
        computed: {
            playersActive: function () {
                return this.activeTab === 'players' ? 'is-active' : '';
            },
            goaliesActive: function () {
                return this.activeTab === 'goalies' ? 'is-active' : '';
            }
        },
        data() {
            return {
                activeTab: 'goalies',
                topPoints: [],
                topGoals: [],
                topAssists: [],
                topPpg: [],
                topWins: [],
                topSavePercentage: [],
                topGoalsAgainstAverage: [],
            }
        },
        created() {
            this.getSkaters();
            this.getGoalies();
        },
        methods: {
            swapTabs: function () {
                this.activeTab === 'players' ? this.activeTab = 'goalies' : this.activeTab = 'players';
            },
            getSkaters: function () {
                axios.all([
                    axios.get(this.domain + '/api/skater/top-active?stat=points&limit=5'),
                    axios.get(this.domain + '/api/skater/top-active?stat=goals&limit=5'),
                    axios.get(this.domain + '/api/skater/top-active?stat=assists&limit=5'),
                    axios.get(this.domain + '/api/skater/top-active?stat=points_per_game&limit=5'),
                ])
                    .then(axios.spread((pointsRes, goalsRes, assistsRes, ppgRes) => {
                        this.topPoints = pointsRes.data.data;
                        this.topGoals = goalsRes.data.data;
                        this.topAssists = assistsRes.data.data;
                        this.topPpg = ppgRes.data.data;
                    }))
                    .catch(error => {
                        console.log(error)
                    })
            },
            getGoalies: function () {
                axios.all([
                    axios.get(this.domain + '/api/goalie/top-active?stat=wins&limit=5'),
                    axios.get(this.domain + '/api/goalie/top-active?stat=save_percentage&limit=5'),
                    axios.get(this.domain + '/api/goalie/top-active?stat=goals_against_average&limit=5')
                ])
                    .then(axios.spread((winRes, svpRes, gaaRes) => {
                        this.topWins = winRes.data.data;
                        this.topSavePercentage = svpRes.data.data;
                        this.topGoalsAgainstAverage = gaaRes.data.data;
                    }))
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
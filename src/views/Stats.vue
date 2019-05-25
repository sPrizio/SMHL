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
                    <li class="is-active">
                        <a>Players</a>
                    </li>
                    <li>
                        <a>Goalies</a>
                    </li>
                </ul>
            </div>

            <!-- stats -->
            <SkaterStats :top-points="topPoints" :top-goals="topGoals" :top-assists="topAssists" :top-ppg="topPpg"/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import SkaterStats from '../components/stats/SkaterStats';

    export default {
        name: "Stats",
        components: {
            SkaterStats
        },
        data() {
            return {
                topPoints: [],
                topGoals: [],
                topAssists: [],
                topPpg: []
            }
        },
        created() {
            this.getSkaters();
        },
        methods: {
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
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
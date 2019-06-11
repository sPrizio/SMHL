<template>
    <div>
        <section class="hero is-white">
            <div class="hero-body">
                <div class="contain has-text-centered">
                    <h1 class="title">
                        {{ this.goalie.name }}
                    </h1>
                    <h2 class="subtitle">
                        {{ this.goalie.position }}
                    </h2>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop">
                    <div class="tabs is-centered is-medium">
                        <ul>
                            <li v-bind:class="activeSeason" v-on:click="toggleTab">
                                <a>Season</a>
                            </li>
                            <li v-bind:class="activeCareer" v-on:click="toggleTab">
                                <a>Career</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop"
                     v-if="this.activeTab === 'season'">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Season Stats
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <table class="table is-fullwidth">
                                    <thead>
                                    <tr>
                                        <th>Season</th>
                                        <th class="smhl-stat-table-centering">Pos</th>
                                        <th class="smhl-stat-table-centering">GP</th>
                                        <th class="smhl-stat-table-centering">GS</th>
                                        <th class="smhl-stat-table-centering">W</th>
                                        <th class="smhl-stat-table-centering">L</th>
                                        <th class="smhl-stat-table-centering">T</th>
                                        <th class="smhl-stat-table-centering">SA</th>
                                        <th class="smhl-stat-table-centering">Svs</th>
                                        <th class="smhl-stat-table-centering">Sv%</th>
                                        <th class="smhl-stat-table-centering">GA</th>
                                        <th class="smhl-stat-table-centering">GAA</th>
                                        <th class="smhl-stat-table-centering">So</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            {{ goalie.season.seasonString }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ goalie.position.toString().substring(0, 1) }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ goalie.season.gamesPlayed }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ goalie.season.gamesStarted }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ goalie.season.wins }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ goalie.season.losses }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ goalie.season.ties }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ goalie.season.shotsAgainst }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ goalie.season.saves }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ goalie.season.savePercentage }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ goalie.season.goalsAgainst }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ goalie.season.goalsAgainstAverage }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ goalie.season.shutouts }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Season Totals</strong>
                                        </td>
                                        <td class="smhl-stat-table-centering"></td>
                                        <td class="smhl-stat-table-centering">
                                            <strong>{{ goalie.season.gamesPlayed }}</strong>
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            <strong>{{ goalie.season.gamesStarted }}</strong>
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            <strong>{{ goalie.season.wins }}</strong>
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            <strong>{{ goalie.season.losses }}</strong>
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            <strong>{{ goalie.season.ties }}</strong>
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            <strong>{{ goalie.season.shotsAgainst }}</strong>
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            <strong>{{ goalie.season.saves }}</strong>
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            <strong>{{ goalie.season.savePercentage }}</strong>
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            <strong>{{ goalie.season.goalsAgainst }}</strong>
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            <strong>{{ goalie.season.goalsAgainstAverage }}</strong>
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            <strong>{{ goalie.season.shutouts }}</strong>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop"
                     v-if="this.activeTab === 'season'">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Game Log
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <table class="table is-fullwidth">
                                    <thead>
                                    <tr>
                                        <th>Opponent</th>
                                        <th>Date</th>
                                        <th class="smhl-stat-table-centering">W/L</th>
                                        <th class="smhl-stat-table-centering">SA</th>
                                        <th class="smhl-stat-table-centering">Svs</th>
                                        <th class="smhl-stat-table-centering">Sv%</th>
                                        <th class="smhl-stat-table-centering">GA</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="game in recentGames">
                                        <td>{{ game.team.name }}</td>
                                        <td>{{ formatDate(game.gameTime.toString()) }}</td>
                                        <td class="smhl-stat-table-centering">{{ game.gameResult.toString().substring(0, 1) }}</td>
                                        <td class="smhl-stat-table-centering">{{ game.shotsAgainst }}</td>
                                        <td class="smhl-stat-table-centering">{{ game.saves }}</td>
                                        <td class="smhl-stat-table-centering">{{ (game.saves / game.shotsAgainst).toFixed(3) }}</td>
                                        <td class="smhl-stat-table-centering">{{ game.goalsAgainst }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop"
                     v-if="this.activeTab === 'season'">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Milestone Tracker
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <div class="columns is-multiline has-text-centered">
                                    <div class="column is-4-desktop is-6-tablet is-offset-3-tablet-desktop is-12-mobile"
                                         v-for="m in milestone">
                                        <p>{{ m.name }}</p>
                                        <p>{{ m.value }}</p>
                                        <p>{{ m.plateau }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop"
                     v-if="this.activeTab === 'career'">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Career Stats
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <table class="table is-fullwidth">
                                    <thead>
                                    <tr>
                                        <th>Season</th>
                                        <th class="smhl-stat-table-centering">Pos</th>
                                        <th class="smhl-stat-table-centering">GP</th>
                                        <th class="smhl-stat-table-centering">GS</th>
                                        <th class="smhl-stat-table-centering">W</th>
                                        <th class="smhl-stat-table-centering">L</th>
                                        <th class="smhl-stat-table-centering">T</th>
                                        <th class="smhl-stat-table-centering">SA</th>
                                        <th class="smhl-stat-table-centering">Svs</th>
                                        <th class="smhl-stat-table-centering">Sv%</th>
                                        <th class="smhl-stat-table-centering">GA</th>
                                        <th class="smhl-stat-table-centering">GAA</th>
                                        <th class="smhl-stat-table-centering">So</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="s in goalie.seasons">
                                        <td>
                                            {{ s.seasonString }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ goalie.position.toString().substring(0, 1) }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ s.gamesPlayed }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ s.gamesStarted }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ s.wins }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ s.losses }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ s.ties }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ s.shotsAgainst }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ s.saves }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ s.savePercentage }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ s.goalsAgainst }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ s.goalsAgainstAverage }}
                                        </td>
                                        <td class="smhl-stat-table-centering">
                                            {{ s.shutouts }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Career Totals</strong>
                                        </td>
                                        <td></td>
                                        <td class="column2 smhl-table-centering">
                                            <strong>{{ goalieStats['gamesPlayed']['sum'] }}</strong>
                                        </td>
                                        <td class="column2 smhl-table-centering">
                                            <strong>{{ goalieStats['gamesStarted']['sum'] }}</strong>
                                        </td>
                                        <td class="column2 smhl-table-centering">
                                            <strong>{{ goalieStats['wins']['sum'] }}</strong>
                                        </td>
                                        <td class="column2 smhl-table-centering">
                                            <strong>{{ goalieStats['losses']['sum'] }}</strong>
                                        </td>
                                        <td class="column2 smhl-table-centering">
                                            <strong>{{ goalieStats['ties']['sum'] }}</strong>
                                        </td>
                                        <td class="column2 smhl-table-centering">
                                            <strong>{{ goalieStats['shotsAgainst']['sum'] }}</strong>
                                        </td>
                                        <td class="column2 smhl-table-centering">
                                            <strong>{{ goalieStats['saves']['sum'] }}</strong>
                                        </td>
                                        <td class="column2 smhl-table-centering">
                                            <strong>{{ goalieStats['savePercentage']['average'].toFixed(3) }}</strong>
                                        </td>
                                        <td class="column2 smhl-table-centering">
                                            <strong>{{ goalieStats['goalsAgainst']['sum'] }}</strong>
                                        </td>
                                        <td class="column2 smhl-table-centering">
                                            <strong>{{ goalieStats['goalsAgainstAverage']['average'].toFixed(2) }}</strong>
                                        </td>
                                        <td class="column2 smhl-table-centering">
                                            <strong>{{ goalieStats['shutouts']['sum'] }}</strong>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';

    export default {
        name: "GoalieComponent",
        created() {
            this.getGoalie();
        },
        data: function () {
            return {
                goalie: '',
                goalieStats: '',
                recentGames: '',
                milestone: [],
                activeTab: 'season'
            }
        },
        computed: {
            activeSeason: function () {
                return this.activeTab === 'season' ? 'is-active' : '';
            },
            activeCareer: function () {
                return this.activeTab === 'career' ? 'is-active' : '';
            }
        },
        methods: {
            getGoalie: function () {
                axios.all([
                    axios.get(this.domain + '/api/goalie/' + this.$route.params.id),
                    axios.get(this.domain + '/api/goalie/stats-for-goalie/' + this.$route.params.id),
                    axios.get(this.domain + '/api/goalie/recent-games/' + this.$route.params.id + '?limit=' + this.recentGamesLimit),
                    axios.get(this.domain + '/api/goalie/milestone/' + this.$route.params.id + '?stat=gp'),
                    axios.get(this.domain + '/api/goalie/milestone/' + this.$route.params.id + '?stat=wins'),
                    axios.get(this.domain + '/api/goalie/milestone/' + this.$route.params.id + '?stat=saves')
                ])
                    .then(axios.spread((goaRes, staRes, rgRes, m1Res, m2Res, m3Res) => {
                        this.goalie = goaRes.data.data;
                        this.goalieStats = staRes.data.data['stats'];
                        this.recentGames = rgRes.data.data;
                        this.milestone.push(m3Res.data.data);
                        this.milestone.push(m2Res.data.data);
                        this.milestone.push(m1Res.data.data);
                    }))
                    .catch(error => {
                        console.log(error)
                    });
            },
            toggleTab: function () {
                this.activeTab = this.activeTab === 'season' ? 'career' : 'season';
            },
            formatDate: function (date) {
                return moment(date).format('MMM DD');
            }
        }
    }
</script>

<style scoped lang="scss">

    .content table .th {
        color: #FFF;
    }

    .smhl-stat-table-centering {
        text-align: center !important;
    }

</style>
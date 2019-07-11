<template>
    <div>
        <section class="hero is-white">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        {{ this.skater.name }}
                    </h1>
                    <h2 class="subtitle">
                        {{ formatPosition(this.skater.position) }}
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
                                <div class="container-smhl-table">
                                    <div class="wrap-smhl-table">
                                        <div class="smhl-table">
                                            <table>
                                                <thead>
                                                <tr class="smhl-table-head noselect">
                                                    <th class="column1 th">
                                                        Season
                                                    </th>
                                                    <th class="column2 smhl-table-centering th">
                                                        Position
                                                    </th>
                                                    <th class="column3 smhl-table-centering th">
                                                        GP
                                                    </th>
                                                    <th class="column4 smhl-table-centering th">
                                                        G
                                                    </th>
                                                    <th class="column5 smhl-table-centering th">
                                                        A
                                                    </th>
                                                    <th class="column6 smhl-table-centering th">
                                                        P
                                                    </th>
                                                    <th class="column7 smhl-table-centering th">
                                                        PPG
                                                    </th>
                                                    <th class="column8 smhl-table-centering th">
                                                        S
                                                    </th>
                                                    <th class="column9 smhl-table-centering th">
                                                        BS
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td class="column1">
                                                        {{ skater.season.seasonString }}
                                                    </td>
                                                    <td class="column2 smhl-table-centering">
                                                        {{ skater.position.toString().substr(0, 1) }}
                                                    </td>
                                                    <td class="column3 smhl-table-centering">
                                                        {{ skater.season.gamesPlayed }}
                                                    </td>
                                                    <td class="column4 smhl-table-centering">
                                                        {{ skater.season.goals }}
                                                    </td>
                                                    <td class="column5 smhl-table-centering">
                                                        {{ skater.season.assists }}
                                                    </td>
                                                    <td class="column6 smhl-table-centering">
                                                        {{ skater.season.points }}
                                                    </td>
                                                    <td class="column7 smhl-table-centering">
                                                        {{ skater.season.pointsPerGame }}
                                                    </td>
                                                    <td class="column8 smhl-table-centering">
                                                        {{ skater.season.shots }}
                                                    </td>
                                                    <td class="column9 smhl-table-centering">
                                                        {{ skater.season.blockedShots }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="column1">
                                                        <strong>Season Totals</strong>
                                                    </td>
                                                    <td class="column2 smhl-table-centering"></td>
                                                    <td class="column3 smhl-table-centering">
                                                        <strong>{{ skater.season.gamesPlayed }}</strong>
                                                    </td>
                                                    <td class="column4 smhl-table-centering">
                                                        <strong>{{ skater.season.goals }}</strong>
                                                    </td>
                                                    <td class="column5 smhl-table-centering">
                                                        <strong>{{ skater.season.assists }}</strong>
                                                    </td>
                                                    <td class="column6 smhl-table-centering">
                                                        <strong>{{ skater.season.points }}</strong>
                                                    </td>
                                                    <td class="column7 smhl-table-centering">
                                                        <strong>{{ skater.season.pointsPerGame }}</strong>
                                                    </td>
                                                    <td class="column8 smhl-table-centering">
                                                        <strong>{{ skater.season.shots }}</strong>
                                                    </td>
                                                    <td class="column9 smhl-table-centering">
                                                        <strong>{{ skater.season.blockedShots }}</strong>
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
                                        <th>Team</th>
                                        <th>Date</th>
                                        <th class="smhl-stat-table-centering">G</th>
                                        <th class="smhl-stat-table-centering">A</th>
                                        <th class="smhl-stat-table-centering">P</th>
                                        <th class="smhl-stat-table-centering">S</th>
                                        <th class="smhl-stat-table-centering">BS</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="game in recentGames">
                                        <td>{{ game.team.name }}</td>
                                        <td>{{ formatDate(game.gameTime.toString()) }}</td>
                                        <td class="smhl-stat-table-centering">{{ game.goals }}</td>
                                        <td class="smhl-stat-table-centering">{{ game.assists }}</td>
                                        <td class="smhl-stat-table-centering">{{ game.points }}</td>
                                        <td class="smhl-stat-table-centering">{{ game.shots }}</td>
                                        <td class="smhl-stat-table-centering">{{ game.blockedShots }}</td>
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
                                    <div class="column is-4-desktop is-6-tablet is-12-mobile" v-for="m in milestone">
                                        <p>{{ m.name }}</p>
                                        <p>{{ m.value }}</p>
                                        <p>{{ m.plateau }}</p>
                                        <progress class="progress is-large" :value="(m.value / m.plateau).toFixed(1)" :max="1.0"></progress>
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
                                <div class="container-smhl-table">
                                    <div class="wrap-smhl-table">
                                        <div class="smhl-table">
                                            <table>
                                                <thead>
                                                <tr class="smhl-table-head noselect">
                                                    <th class="column1 th">
                                                        Season
                                                    </th>
                                                    <th class="column2 smhl-table-centering th">
                                                        Position
                                                    </th>
                                                    <th class="column3 smhl-table-centering th">
                                                        GP
                                                    </th>
                                                    <th class="column4 smhl-table-centering th">
                                                        G
                                                    </th>
                                                    <th class="column5 smhl-table-centering th">
                                                        A
                                                    </th>
                                                    <th class="column6 smhl-table-centering th">
                                                        P
                                                    </th>
                                                    <th class="column7 smhl-table-centering th">
                                                        PPG
                                                    </th>
                                                    <th class="column8 smhl-table-centering th">
                                                        S
                                                    </th>
                                                    <th class="column9 smhl-table-centering th">
                                                        BS
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="s in skater.seasons">
                                                    <td class="column1">
                                                        {{ s.seasonString }}
                                                    </td>
                                                    <td class="column2 smhl-table-centering">
                                                        {{ skater.position.toString().substr(0, 1) }}
                                                    </td>
                                                    <td class="column3 smhl-table-centering">
                                                        {{ s.gamesPlayed }}
                                                    </td>
                                                    <td class="column4 smhl-table-centering">
                                                        {{ s.goals }}
                                                    </td>
                                                    <td class="column5 smhl-table-centering">
                                                        {{ s.assists }}
                                                    </td>
                                                    <td class="column6 smhl-table-centering">
                                                        {{ s.points }}
                                                    </td>
                                                    <td class="column7 smhl-table-centering">
                                                        {{ s.pointsPerGame }}
                                                    </td>
                                                    <td class="column8 smhl-table-centering">
                                                        {{ s.shots }}
                                                    </td>
                                                    <td class="column9 smhl-table-centering">
                                                        {{ s.blockedShots }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="column1">
                                                        <strong>Career Totals</strong>
                                                    </td>
                                                    <td class="column2 smhl-table-centering"></td>
                                                    <td class="column3 smhl-table-centering">
                                                        <strong>{{ skaterStats['gamesPlayed']['sum'] }}</strong>
                                                    </td>
                                                    <td class="column4 smhl-table-centering">
                                                        <strong>{{ skaterStats['goals']['sum'] }}</strong>
                                                    </td>
                                                    <td class="column5 smhl-table-centering">
                                                        <strong>{{ skaterStats['assists']['sum'] }}</strong>
                                                    </td>
                                                    <td class="column6 smhl-table-centering">
                                                        <strong>{{ skaterStats['points']['sum'] }}</strong>
                                                    </td>
                                                    <td class="column7 smhl-table-centering">
                                                        <strong>{{ skaterStats['pointsPerGame']['average'].toFixed(2)
                                                            }}</strong>
                                                    </td>
                                                    <td class="column8 smhl-table-centering">
                                                        <strong>{{ skaterStats['shots']['sum'] }}</strong>
                                                    </td>
                                                    <td class="column9 smhl-table-centering">
                                                        <strong>{{ skaterStats['blockedShots']['sum'] }}</strong>
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
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';

    export default {
        name: "SkaterComponent",
        created() {
            this.getSkater();
        },
        data: function () {
            return {
                skater: '',
                skaterStats: '',
                recentGames: '',
                milestone: [],
                activeTab: 'season',
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
            getSkater: function () {
                axios.all([
                    axios.get(this.domain + '/api/skater/' + this.$route.params.id),
                    axios.get(this.domain + '/api/skater/stats-for-skater/' + this.$route.params.id),
                    axios.get(this.domain + '/api/skater/recent-games/' + this.$route.params.id + '?limit=' + this.recentGamesLimit),
                    axios.get(this.domain + '/api/skater/milestone/' + this.$route.params.id + '?stat=gp'),
                    axios.get(this.domain + '/api/skater/milestone/' + this.$route.params.id + '?stat=goals'),
                    axios.get(this.domain + '/api/skater/milestone/' + this.$route.params.id + '?stat=points')
                ])
                    .then(axios.spread((skaRes, staRes, rgRes, m1Res, m2Res, m3Res) => {
                        this.skater = skaRes.data.data;
                        this.skaterStats = staRes.data.data['stats'];
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
            },
            formatPosition: function (string) {
                return string.replace('_', ' ');
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
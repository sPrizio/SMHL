<template>
    <div id="game">
        <section class="hero is-white">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-multiline">
                        <div class="column is-5-desktop is-6-tablet is-12-mobile is-offset-1-desktop">
                            <h1 class="title">
                                {{ this.game.homeTeam.name }}
                            </h1>
                            <h2 class="subtitle">
                                {{ this.game.gameDetails.homeTeamScore }}
                            </h2>
                        </div>
                        <div class="column is-5-desktop is-6-tablet is-12-mobile has-text-right">
                            <h1 class="title">
                                {{ this.game.awayTeam.name }}
                            </h1>
                            <h2 class="subtitle">
                                {{ this.game.gameDetails.awayTeamScore }}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop">
                    <div class="tabs is-centered is-medium">
                        <ul>
                            <li v-bind:class="activeHome" v-on:click="toggleTab">
                                <a>Home</a>
                            </li>
                            <li v-bind:class="activeAway" v-on:click="toggleTab">
                                <a>Away</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <p class="subtitle" v-if="activeTab === 'home'">{{ game.homeTeam.name }}</p>
                                <p class="subtitle" v-if="activeTab === 'away'">{{ game.awayTeam.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop"
                     v-if="this.activeTab === 'home'">
                    <div class="columns is-multiline">
                        <div class="column is-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>Goalie</th>
                                                <th class="smhl-stat-table-centering">W/L</th>
                                                <th class="smhl-stat-table-centering">SA</th>
                                                <th class="smhl-stat-table-centering">Svs</th>
                                                <th class="smhl-stat-table-centering">Sv%</th>
                                                <th class="smhl-stat-table-centering">GA</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="details in game.gameDetails.goalieGameDetails" v-if="details.team.code === game.homeTeam.code">
                                                <td>{{ details.goalie.name }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.gameResult.toString().substring(0, 1) }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.shotsAgainst }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.saves }}</td>
                                                <td class="smhl-stat-table-centering">{{ (details.saves / details.shotsAgainst).toFixed(3) }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.goalsAgainst }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>Skater</th>
                                                <th class="smhl-stat-table-centering">G</th>
                                                <th class="smhl-stat-table-centering">A</th>
                                                <th class="smhl-stat-table-centering">P</th>
                                                <th class="smhl-stat-table-centering">S</th>
                                                <th class="smhl-stat-table-centering">BS</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="details in game.gameDetails.skaterGameDetails" v-if="details.team.code === game.homeTeam.code">
                                                <td>{{ details.skater.name }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.goals }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.assists }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.points }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.shots }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.blockedShots }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop"
                     v-if="this.activeTab === 'away'">
                    <div class="columns is-multiline">
                        <div class="column is-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>Goalie</th>
                                                <th class="smhl-stat-table-centering">W/L</th>
                                                <th class="smhl-stat-table-centering">SA</th>
                                                <th class="smhl-stat-table-centering">Svs</th>
                                                <th class="smhl-stat-table-centering">Sv%</th>
                                                <th class="smhl-stat-table-centering">GA</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="details in game.gameDetails.goalieGameDetails" v-if="details.team.code === game.awayTeam.code">
                                                <td>{{ details.goalie.name }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.gameResult.toString().substring(0, 1) }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.shotsAgainst }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.saves }}</td>
                                                <td class="smhl-stat-table-centering">{{ (details.saves / details.shotsAgainst).toFixed(3) }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.goalsAgainst }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>Skater</th>
                                                <th class="smhl-stat-table-centering">G</th>
                                                <th class="smhl-stat-table-centering">A</th>
                                                <th class="smhl-stat-table-centering">P</th>
                                                <th class="smhl-stat-table-centering">S</th>
                                                <th class="smhl-stat-table-centering">BS</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="details in game.gameDetails.skaterGameDetails" v-if="details.team.code === game.awayTeam.code">
                                                <td>{{ details.skater.name }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.goals }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.assists }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.points }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.shots }}</td>
                                                <td class="smhl-stat-table-centering">{{ details.blockedShots }}</td>
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
</template>

<script>
    export default {
        name: "GameComponent",
        props: {
            game: Object
        },
        data: function () {
            return {
                activeTab: 'home'
            }
        },
        computed: {
            activeHome: function () {
                return this.activeTab === 'home' ? 'is-active' : '';
            },
            activeAway: function () {
                return this.activeTab === 'away' ? 'is-active' : '';
            }
        },
        methods: {
            toggleTab: function () {
                this.activeTab = this.activeTab === 'home' ? 'away' : 'home';
            },
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
<template>
    <div class="columns is-multiline">
        <div class="column is-5-desktop is-6-tablet is-12-mobile is-offset-1-desktop">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Wins
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <table class="table is-fullwidth">
                            <tr>
                                <th>Name</th>
                                <th class="smhl-stat-table-centering">GP</th>
                                <th class="smhl-stat-table-centering">Wins</th>
                            </tr>
                            <tbody>
                            <tr v-for="goalie in topWins">
                                <td>
                                    <router-link :to="{ name: 'goalie', params: { id: goalie.code } }" class="participant-link">
                                        {{ goalie.name }}
                                    </router-link>
                                </td>
                                <td class="smhl-stat-table-centering">
                                    {{ goalie.season.gamesPlayed }}
                                </td>
                                <td class="smhl-stat-table-centering is-active">
                                    {{ goalie.season.wins }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>League Average:</strong>
                                </td>
                                <td></td>
                                <td class="smhl-stat-table-centering">
                                    <strong>{{ stats['wins']['average'].toFixed(1) }}</strong>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-5-desktop is-6-tablet is-12-mobile">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Save %
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <table class="table is-fullwidth">
                            <tr>
                                <th>Name</th>
                                <th class="smhl-stat-table-centering">SA</th>
                                <th class="smhl-stat-table-centering">Svs</th>
                                <th class="smhl-stat-table-centering">Sv %</th>
                            </tr>
                            <tbody>
                            <tr v-for="goalie in topSavePercentage">
                                <td>
                                    <router-link :to="{ name: 'goalie', params: { id: goalie.code } }" class="participant-link">
                                        {{ goalie.name }}
                                    </router-link>
                                </td>
                                <td class="smhl-stat-table-centering">
                                    {{ goalie.season.shotsAgainst }}
                                </td>
                                <td class="smhl-stat-table-centering">
                                    {{ goalie.season.saves }}
                                </td>
                                <td class="smhl-stat-table-centering is-active">
                                    {{ goalie.season.savePercentage }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>League Average:</strong>
                                </td>
                                <td></td>
                                <td></td>
                                <td class="smhl-stat-table-centering">
                                    <strong>{{ this.calcSvpAvg(stats['saves']['sum'], stats['shotsAgainst']['sum']) }}</strong>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-6-desktop is-6-tablet is-12-mobile is-offset-3-desktop is-offset-3-tablet">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Goals Against Average
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <table class="table is-fullwidth">
                            <tr>
                                <th>Name</th>
                                <th class="smhl-stat-table-centering">GP</th>
                                <th class="smhl-stat-table-centering">GA</th>
                                <th class="smhl-stat-table-centering">GAA</th>
                            </tr>
                            <tbody>
                            <tr v-for="goalie in topGoalsAgainstAverage">
                                <td>
                                    <router-link :to="{ name: 'goalie', params: { id: goalie.code } }" class="participant-link">
                                        {{ goalie.name }}
                                    </router-link>
                                </td>
                                <td class="smhl-stat-table-centering">
                                    {{ goalie.season.gamesPlayed }}
                                </td>
                                <td class="smhl-stat-table-centering">
                                    {{ goalie.season.goalsAgainst }}
                                </td>
                                <td class="smhl-stat-table-centering is-active">
                                    {{ goalie.season.goalsAgainstAverage }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>League Average:</strong>
                                </td>
                                <td></td>
                                <td></td>
                                <td class="smhl-stat-table-centering">
                                    <strong>{{ stats['goalsAgainstAverage']['average'].toFixed(2) }}</strong>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoalieStats",
        props: {
            topWins: Array,
            topSavePercentage: Array,
            topGoalsAgainstAverage: Array,
            stats: Object
        },
        methods: {
            calcSvpAvg(num1, num2) {
                if (num2 === 0) {
                    return 0;
                }

                return (num1 / num2).toFixed(3);
            }
        }
    }
</script>

<style scoped lang="scss">

    .smhl-stat-table-centering {
        text-align: center !important;
    }

    .is-active {
        background-color: rgba(200, 200, 255, 0.30);
    }

</style>
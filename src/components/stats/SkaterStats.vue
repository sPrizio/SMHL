<template>
    <div class="columns is-multiline">
        <div class="column is-5-desktop is-6-tablet is-12-mobile is-offset-1-desktop">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Points
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <table class="table is-fullwidth">
                            <tr>
                                <th>Name</th>
                                <th class="smhl-stat-table-centering">Pos</th>
                                <th class="smhl-stat-table-centering">GP</th>
                                <th class="smhl-stat-table-centering">Points</th>
                            </tr>
                            <tbody>
                            <tr v-for="skater in topPoints">
                                <td>
                                    {{ skater.name }}
                                </td>
                                <td class="smhl-stat-table-centering">
                                    {{ skater.position.toString().substring(0, 1) }}
                                </td>
                                <td class="smhl-stat-table-centering">
                                    {{ skater.season.gamesPlayed }}
                                </td>
                                <td class="smhl-stat-table-centering is-active">
                                    {{ skater.season.points }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>League Average:</strong>
                                </td>
                                <td></td>
                                <td></td>
                                <td class="smhl-stat-table-centering">
                                    <strong>{{ stats['points']['average'].toFixed(1) }}</strong>
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
                        Goals
                    </p>
                </header>
                <div class="card-content">
                    <table class="table is-fullwidth">
                        <tr>
                            <th>Name</th>
                            <th class="smhl-stat-table-centering">Pos</th>
                            <th class="smhl-stat-table-centering">Shots</th>
                            <th class="smhl-stat-table-centering">Goals</th>
                        </tr>
                        <tbody>
                        <tr v-for="skater in topGoals">
                            <td>
                                {{ skater.name }}
                            </td>
                            <td class="smhl-stat-table-centering">
                                {{ skater.position.toString().substring(0, 1) }}
                            </td>
                            <td class="smhl-stat-table-centering">
                                {{ skater.season.shots }}
                            </td>
                            <td class="smhl-stat-table-centering is-active">
                                {{ skater.season.goals }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>League Average:</strong>
                            </td>
                            <td></td>
                            <td></td>
                            <td class="smhl-stat-table-centering">
                                <strong>{{ stats['goals']['average'].toFixed(1) }}</strong>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="column is-5-desktop is-6-tablet is-12-mobile is-offset-1-desktop">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Assists
                    </p>
                </header>
                <div class="card-content">
                    <table class="table is-fullwidth">
                        <tr>
                            <th>Name</th>
                            <th class="smhl-stat-table-centering">Pos</th>
                            <th class="smhl-stat-table-centering">Assists</th>
                            <th class="smhl-stat-table-centering">Points</th>
                        </tr>
                        <tbody>
                        <tr v-for="skater in topAssists">
                            <td>
                                {{ skater.name }}
                            </td>
                            <td class="smhl-stat-table-centering">
                                {{ skater.position.toString().substring(0, 1) }}
                            </td>
                            <td class="smhl-stat-table-centering is-active">
                                {{ skater.season.assists }}
                            </td>
                            <td class="smhl-stat-table-centering">
                                {{ skater.season.points }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>League Average:</strong>
                            </td>
                            <td></td>
                            <td></td>
                            <td class="smhl-stat-table-centering">
                                <strong>{{ stats['assists']['average'].toFixed(1) }}</strong>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="column is-5-desktop is-6-tablet is-12-mobile">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Points Per Game
                    </p>
                </header>
                <div class="card-content">
                    <table class="table is-fullwidth">
                        <tr>
                            <th>Name</th>
                            <th class="smhl-stat-table-centering">Pos</th>
                            <th class="smhl-stat-table-centering">GP</th>
                            <th class="smhl-stat-table-centering">PPG</th>
                        </tr>
                        <tbody>
                        <tr v-for="skater in topPoints">
                            <td>
                                {{ skater.name }}
                            </td>
                            <td class="smhl-stat-table-centering">
                                {{ skater.position.toString().substring(0, 1) }}
                            </td>
                            <td class="smhl-stat-table-centering">
                                {{ skater.season.gamesPlayed }}
                            </td>
                            <td class="smhl-stat-table-centering is-active">
                                {{ skater.season.pointsPerGame }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>League Average:</strong>
                            </td>
                            <td></td>
                            <td></td>
                            <td class="smhl-stat-table-centering">
                                <strong>{{ stats['pointsPerGame']['average'].toFixed(1) }}</strong>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SkaterStats",
        props: {
            topPoints: Array,
            topGoals: Array,
            topAssists: Array,
            topPpg: Array,
            stats: Object
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
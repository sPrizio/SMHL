<template>
    <div class="container">
        <div class="container-smhl-table">
            <div class="wrap-smhl-table">
                <div class="smhl-table">
                    <table>
                        <thead>
                        <tr class="smhl-table-head noselect">
                            <th class="column1">
                                Team Name
                            </th>
                            <th class="column2 smhl-table-centering">
                                GP
                            </th>
                            <th class="column3 smhl-table-centering">
                                W
                            </th>
                            <th class="column4 smhl-table-centering">
                                L
                            </th>
                            <th class="column5 smhl-table-centering">
                                T
                            </th>
                            <th class="column6 smhl-table-centering">
                                Pts
                            </th>
                            <th class="column7 smhl-table-centering">
                                GF
                            </th>
                            <th class="column8 smhl-table-centering">
                                GA
                            </th>
                            <th class="column9 smhl-table-centering">
                                Diff
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="team in teams">
                            <td class="column1">
                                {{ team.name }}
                            </td>
                            <td class="column2 smhl-table-centering">
                                {{ team.season.gamesPlayed }}
                            </td>
                            <td class="column3 smhl-table-centering">
                                {{ team.season.wins }}
                            </td>
                            <td class="column4 smhl-table-centering">
                                {{ team.season.losses }}
                            </td>
                            <td class="column5 smhl-table-centering">
                                {{ team.season.ties }}
                            </td>
                            <td class="column6 smhl-table-centering">
                                {{ team.season.points }}
                            </td>
                            <td class="column7 smhl-table-centering">
                                {{ team.season.goalsFor }}
                            </td>
                            <td class="column8 smhl-table-centering">
                                {{ team.season.goalsAgainst }}
                            </td>
                            <td class="column9 smhl-table-centering">
                                {{ team.season.differential }}
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

    let SortQuery = {
        param: String,
        value: String
    }

    export default {
        name: "TeamTable",
        props: {
            teams: Array
        },
        computed: {
            nameActive: function () {

            },
        },
        data() {

        },
        methods: {

        }
    }
</script>

<style scoped lang="scss">

    .is-active {
        background-color: rgba(200, 200, 255, 0.30);
    }

</style>
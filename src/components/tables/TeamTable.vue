<template>
    <div class="container">
        <div class="container-smhl-table">
            <div class="wrap-smhl-table">
                <div class="smhl-table">
                    <table>
                        <thead>
                        <tr class="smhl-table-head noselect">
                            <th class="column1" v-on:click="toggleSortParameter('name')">
                                Team Name<span v-html="this.showArrow(this.sortParams['name'].value)"></span>
                            </th>
                            <th class="column2 smhl-table-centering" v-on:click="toggleSortParameter('gp')">
                                GP<span v-html="this.showArrow(this.sortParams['gp'].value)"></span>
                            </th>
                            <th class="column3 smhl-table-centering" v-on:click="toggleSortParameter('w')">
                                W<span v-html="this.showArrow(this.sortParams['w'].value)"></span>
                            </th>
                            <th class="column4 smhl-table-centering" v-on:click="toggleSortParameter('l')">
                                L<span v-html="this.showArrow(this.sortParams['l'].value)"></span>
                            </th>
                            <th class="column5 smhl-table-centering" v-on:click="toggleSortParameter('t')">
                                T<span v-html="this.showArrow(this.sortParams['t'].value)"></span>
                            </th>
                            <th class="column6 smhl-table-centering" v-on:click="toggleSortParameter('p')">
                                Pts<span v-html="this.showArrow(this.sortParams['p'].value)"></span>
                            </th>
                            <th class="column7 smhl-table-centering" v-on:click="toggleSortParameter('gf')">
                                GF<span v-html="this.showArrow(this.sortParams['gf'].value)"></span>
                            </th>
                            <th class="column8 smhl-table-centering" v-on:click="toggleSortParameter('ga')">
                                GA<span v-html="this.showArrow(this.sortParams['ga'].value)"></span>
                            </th>
                            <th class="column9 smhl-table-centering" v-on:click="toggleSortParameter('diff')">
                                Diff<span v-html="this.showArrow(this.sortParams['diff'].value)"></span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="team in teams">
                            <td class="column1" v-bind:class="nameActive">
                                {{ team.name }}
                            </td>
                            <td class="column2 smhl-table-centering" v-bind:class="gpActive">
                                {{ team.season.gamesPlayed }}
                            </td>
                            <td class="column3 smhl-table-centering" v-bind:class="wActive">
                                {{ team.season.wins }}
                            </td>
                            <td class="column4 smhl-table-centering" v-bind:class="lActive">
                                {{ team.season.losses }}
                            </td>
                            <td class="column5 smhl-table-centering" v-bind:class="tActive">
                                {{ team.season.ties }}
                            </td>
                            <td class="column6 smhl-table-centering" v-bind:class="pActive">
                                {{ team.season.points }}
                            </td>
                            <td class="column7 smhl-table-centering" v-bind:class="gfActive">
                                {{ team.season.goalsFor }}
                            </td>
                            <td class="column8 smhl-table-centering" v-bind:class="gaActive">
                                {{ team.season.goalsAgainst }}
                            </td>
                            <td class="column9 smhl-table-centering" v-bind:class="diffActive">
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
    };

    export default {
        name: "TeamTable",
        props: {
            teams: Array
        },
        computed: {
            nameActive: function () {
                return this.sortIndex === 'name' ? 'is-active' : '';
            },
            gpActive: function () {
                return this.sortIndex === 'gp' ? 'is-active' : '';
            },
            wActive: function () {
                return this.sortIndex === 'w' ? 'is-active' : '';
            },
            lActive: function () {
                return this.sortIndex === 'l' ? 'is-active' : '';
            },
            tActive: function () {
                return this.sortIndex === 't' ? 'is-active' : '';
            },
            pActive: function () {
                return this.sortIndex === 'p' ? 'is-active' : '';
            },
            gfActive: function () {
                return this.sortIndex === 'gf' ? 'is-active' : '';
            },
            gaActive: function () {
                return this.sortIndex === 'ga' ? 'is-active' : '';
            },
            diffActive: function () {
                return this.sortIndex === 'diff' ? 'is-active' : '';
            }
        },
        data() {
            return {
                sortIndex: 'p',
                sortParams: {   //  the param value is the same as that which appears in the api, it corresponds to the db column
                    "name": SortQuery = {
                        param: "name",
                        value: ''
                    },
                    "gp": SortQuery = {
                        param: "games_played",
                        value: ''
                    },
                    "w": SortQuery = {
                        param: "wins",
                        value: ''
                    },
                    "l": SortQuery = {
                        param: "losses",
                        value: ''
                    },
                    "t": SortQuery = {
                        param: "ties",
                        value: ''
                    },
                    "p": SortQuery = {
                        param: "points",
                        value: 'desc'   //  given an initial value since we default to points sorting on first page load
                    },
                    "gf": SortQuery = {
                        param: "goals_for",
                        value: ''
                    },
                    "ga": SortQuery = {
                        param: "goals_against",
                        value: ''
                    },
                    "diff": SortQuery = {
                        param: "differential",
                        value: ''
                    }
                }
            }
        },
        methods: {
            //  toggles sorting per column
            toggleSortParameter: function (sortParam) {
                if (!this.sortParams[sortParam].value) {
                    this.resetSortArrows();
                    this.sortParams[sortParam].value = 'asc';
                    this.$emit('sortTeams', this.sortParams[sortParam]);
                    this.sortIndex = sortParam;
                } else if (this.sortParams[sortParam].value === 'asc') {
                    this.resetSortArrows();
                    this.sortParams[sortParam].value = 'desc';
                    this.$emit('sortTeams', this.sortParams[sortParam]);
                    this.sortIndex = sortParam;
                } else {
                    this.resetSortArrows();
                    this.sortParams[sortParam].value = '';
                    this.sortIndex = '';
                }
            },

            //  displays an arrow based on sort order
            showArrow: function (sortOrder) {
                if (sortOrder === 'asc') {
                    return ' &#8593;';
                } else if (sortOrder === 'desc') {
                    return ' &#8595;';
                } else {
                    return '';
                }
            },

            //  resets all sort arrows
            resetSortArrows() {
                Object.keys(this.sortParams).forEach(key => {
                    this.sortParams[key].value = '';
                })
            }
        }
    }
</script>

<style scoped lang="scss">

    .is-active {
        background-color: rgba(200, 200, 255, 0.30);
    }

</style>
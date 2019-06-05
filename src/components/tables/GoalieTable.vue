<template>
    <div class="container">
        <div class="container-smhl-table">
            <div class="wrap-smhl-table">
                <div class="smhl-table">
                    <table>
                        <thead>
                        <tr class="smhl-table-head noselect">
                            <th class="column1" v-on:click="toggleSortParameter('name')">
                                Name<span v-html="this.showArrow(this.sortParams['name'].value)"></span>
                            </th>
                            <th class="column2 smhl-table-centering" v-on:click="toggleSortParameter('pos')">
                                Position<span v-html="this.showArrow(this.sortParams['pos'].value)"></span>
                            </th>
                            <th class="column3 smhl-table-centering" v-on:click="toggleSortParameter('gp')">
                                GP<span v-html="this.showArrow(this.sortParams['gp'].value)"></span>
                            </th>
                            <th class="column4 smhl-table-centering" v-on:click="toggleSortParameter('w')">
                                W<span v-html="this.showArrow(this.sortParams['w'].value)"></span>
                            </th>
                            <th class="column5 smhl-table-centering" v-on:click="toggleSortParameter('l')">
                                L<span v-html="this.showArrow(this.sortParams['l'].value)"></span>
                            </th>
                            <th class="column6 smhl-table-centering" v-on:click="toggleSortParameter('t')">
                                T<span v-html="this.showArrow(this.sortParams['t'].value)"></span>
                            </th>
                            <th class="column7 smhl-table-centering" v-on:click="toggleSortParameter('sa')">
                                SA<span v-html="this.showArrow(this.sortParams['sa'].value)"></span>
                            </th>
                            <th class="column8 smhl-table-centering" v-on:click="toggleSortParameter('svp')">
                                Sv%<span v-html="this.showArrow(this.sortParams['svp'].value)"></span>
                            </th>
                            <th class="column9 smhl-table-centering" v-on:click="toggleSortParameter('gaa')">
                                GAA<span v-html="this.showArrow(this.sortParams['gaa'].value)"></span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="goalie in goalies">
                            <td class="column1" v-bind:class="nameActive">
                                <router-link :to="{ name: 'goalie', params: { id: goalie.code } }" class="participant-link">
                                    {{ goalie.name }}
                                </router-link>
                            </td>
                            <td class="column2 smhl-table-centering" v-bind:class="posActive">
                                {{ goalie.position.toString().substr(0, 1) }}
                            </td>
                            <td class="column3 smhl-table-centering" v-bind:class="gpActive">
                                {{ goalie.season.gamesPlayed }}
                            </td>
                            <td class="column4 smhl-table-centering" v-bind:class="wActive">
                                {{ goalie.season.wins }}

                            </td>
                            <td class="column5 smhl-table-centering" v-bind:class="lActive">
                                {{ goalie.season.losses }}

                            </td>
                            <td class="column6 smhl-table-centering" v-bind:class="tActive">
                                {{ goalie.season.ties }}

                            </td>
                            <td class="column7 smhl-table-centering" v-bind:class="saActive">
                                {{ goalie.season.shotsAgainst }}

                            </td>
                            <td class="column8 smhl-table-centering" v-bind:class="svpActive">
                                {{ goalie.season.savePercentage }}

                            </td>
                            <td class="column9 smhl-table-centering" v-bind:class="gaaActive">
                                {{ goalie.season.goalsAgainstAverage }}

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
        name: "GoalieTable",
        props: {
            goalies: Array
        },
        computed: {
            nameActive: function () {
                return this.sortIndex === 'name' ? 'is-active' : '';
            },
            posActive: function () {
                return this.sortIndex === 'pos' ? 'is-active' : '';
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
            saActive: function () {
                return this.sortIndex === 'sa' ? 'is-active' : '';
            },
            svpActive: function () {
                return this.sortIndex === 'svp' ? 'is-active' : '';
            },
            gaaActive: function () {
                return this.sortIndex === 'gaa' ? 'is-active' : '';

            }
        },
        data() {
            return {
                sortIndex: 'w',
                sortParams: {   //  the param value is the same as that which appears in the api, it corresponds to the db column
                    "name": SortQuery = {
                        param: "last_name",
                        value: ''
                    },
                    "pos": SortQuery = {
                        param: "position",
                        value: ''
                    },
                    "gp": SortQuery = {
                        param: "games_played",
                        value: ''
                    },
                    "w": SortQuery = {
                        param: "wins",
                        value: 'desc'   //  given an initial value since we default to points sorting on first page load
                    },
                    "l": SortQuery = {
                        param: "losses",
                        value: ''
                    },
                    "t": SortQuery = {
                        param: "ties",
                        value: ''
                    },
                    "sa": SortQuery = {
                        param: "shots_against",
                        value: ''
                    },
                    "svp": SortQuery = {
                        param: "save_percentage",
                        value: ''
                    },
                    "gaa": SortQuery = {
                        param: "goals_against_average",
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
                    this.$emit('sortGoalies', this.sortParams[sortParam]);
                    this.sortIndex = sortParam;
                } else if (this.sortParams[sortParam].value === 'asc') {
                    this.resetSortArrows();
                    this.sortParams[sortParam].value = 'desc';
                    this.$emit('sortGoalies', this.sortParams[sortParam]);
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
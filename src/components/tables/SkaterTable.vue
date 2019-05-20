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
                            <th class="column4 smhl-table-centering" v-on:click="toggleSortParameter('g')">
                                G<span v-html="this.showArrow(this.sortParams['g'].value)"></span>
                            </th>
                            <th class="column5 smhl-table-centering" v-on:click="toggleSortParameter('a')">
                                A<span v-html="this.showArrow(this.sortParams['a'].value)"></span>
                            </th>
                            <th class="column6 smhl-table-centering" v-on:click="toggleSortParameter('p')">
                                P<span v-html="this.showArrow(this.sortParams['p'].value)"></span>
                            </th>
                            <th class="column7 smhl-table-centering" v-on:click="toggleSortParameter('ppg')">
                                PPG<span v-html="this.showArrow(this.sortParams['ppg'].value)"></span>
                            </th>
                            <th class="column8 smhl-table-centering" v-on:click="toggleSortParameter('s')">
                                S<span v-html="this.showArrow(this.sortParams['s'].value)"></span>
                            </th>
                            <th class="column9 smhl-table-centering" v-on:click="toggleSortParameter('bs')">
                                BS<span v-html="this.showArrow(this.sortParams['bs'].value)"></span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="skater in skaters">
                            <td class="column1" v-bind:class="nameActive">{{ skater.name }}</td>
                            <td class="column2 smhl-table-centering" v-bind:class="posActive">{{ skater.position.toString().substr(0, 1) }}</td>
                            <td class="column3 smhl-table-centering" v-bind:class="gpActive">{{ skater.season.gamesPlayed }}</td>
                            <td class="column4 smhl-table-centering" v-bind:class="gActive">{{ skater.season.goals }}</td>
                            <td class="column5 smhl-table-centering" v-bind:class="aActive">{{ skater.season.assists }}</td>
                            <td class="column6 smhl-table-centering" v-bind:class="pActive">{{ skater.season.points }}</td>
                            <td class="column7 smhl-table-centering" v-bind:class="ppgActive">{{ skater.season.pointsPerGame }}</td>
                            <td class="column8 smhl-table-centering" v-bind:class="sActive">{{ skater.season.shots }}</td>
                            <td class="column9 smhl-table-centering" v-bind:class="bsActive">{{ skater.season.blockedShots }}</td>
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
        name: "SkaterTable",
        props: {
            skaters: Array
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
            gActive: function () {
                return this.sortIndex === 'g' ? 'is-active' : '';
            },
            aActive: function () {
                return this.sortIndex === 'a' ? 'is-active' : '';
            },
            pActive: function () {
                return this.sortIndex === 'p' ? 'is-active' : '';
            },
            ppgActive: function () {
                return this.sortIndex === 'ppg' ? 'is-active' : '';
            },
            sActive: function () {
                return this.sortIndex === 's' ? 'is-active' : '';
            },
            bsActive: function () {
                return this.sortIndex === 'bs' ? 'is-active' : '';
            }
        },
        data() {
            return {
                sortIndex: 'p',
                sortParams: {
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
                    "g": SortQuery = {
                        param: "goals",
                        value: ''
                    },
                    "a": SortQuery = {
                        param: "assists",
                        value: ''
                    },
                    "p": SortQuery = {
                        param: "points",
                        value: 'desc'
                    },
                    "ppg": SortQuery = {
                        param: "points_per_game",
                        value: ''
                    },
                    "s": SortQuery = {
                        param: "shots",
                        value: ''
                    },
                    "bs": SortQuery = {
                        param: "blocked_shots",
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
                    this.$emit('sortSkaters', this.sortParams[sortParam]);
                    this.sortIndex = sortParam;
                } else if (this.sortParams[sortParam].value === 'asc') {
                    this.resetSortArrows();
                    this.sortParams[sortParam].value = 'desc';
                    this.$emit('sortSkaters', this.sortParams[sortParam]);
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
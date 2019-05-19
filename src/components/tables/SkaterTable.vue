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
                            <td class="column1">{{ skater.name }}</td>
                            <td class="column2 smhl-table-centering">{{ skater.position.toString().substr(0, 1) }}</td>
                            <td class="column3 smhl-table-centering">{{ skater.currentSeason.gamesPlayed }}</td>
                            <td class="column4 smhl-table-centering">{{ skater.currentSeason.goals }}</td>
                            <td class="column5 smhl-table-centering">{{ skater.currentSeason.assists }}</td>
                            <td class="column6 smhl-table-centering">{{ skater.currentSeason.points }}</td>
                            <td class="column7 smhl-table-centering">{{ skater.currentSeason.pointsPerGame }}</td>
                            <td class="column8 smhl-table-centering">{{ skater.currentSeason.shots }}</td>
                            <td class="column9 smhl-table-centering">{{ skater.currentSeason.blockedShots }}</td>
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
        data() {
            return {
                sortParams: {
                    "name": SortQuery = {
                        param: "name",
                        value: ''
                    },
                    "pos": SortQuery = {
                        param: "pos",
                        value: ''
                    },
                    "gp": SortQuery = {
                        param: "gp",
                        value: ''
                    },
                    "g": SortQuery = {
                        param: "g",
                        value: ''
                    },
                    "a": SortQuery = {
                        param: "a",
                        value: ''
                    },
                    "p": SortQuery = {
                        param: "p",
                        value: ''
                    },
                    "ppg": SortQuery = {
                        param: "ppg",
                        value: ''
                    },
                    "s": SortQuery = {
                        param: "s",
                        value: ''
                    },
                    "bs": SortQuery = {
                        param: "bs",
                        value: ''
                    }
                }
            }
        },
        methods: {
            //  toggles sorting per column
            toggleSortParameter: function (sortParam) {
                if (!this.sortParams[sortParam].value) {
                    this.sortParams[sortParam].value = 'asc';
                    //  todo: emit event that will be caught by view to re-sort by attribute in ascending order
                } else if (this.sortParams[sortParam].value === 'asc') {
                    this.sortParams[sortParam].value = 'desc'
                    //  todo: emit event that will be caught by view to re-sort by attribute in descending order
                } else {
                    this.sortParams[sortParam].value = '';
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
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
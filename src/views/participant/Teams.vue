<template>
    <div id="teams">
        <section class="hero is-small">
            <div class="hero-body">
                <div class="container">
                    <br/>
                    <div class="columns is-multiline">
                        <div class="column is-6-desktop is-12-mobile is-12-mobile">
                            <h1 class="title">
                                Active Teams
                            </h1>
                            <h2 class="subtitle">
                                A comprehensive look at all active teams for the {{ this.currentSeason }} season
                            </h2>
                        </div>
                        <div class="column is-6-desktop is-12-tablet is-12-mobile has-text-right">
                            <div class="select">
                                <label for="team-list"></label>
                                <select id="team-list" name="team-list" v-on:change="handleSelect(selected)"
                                        v-model="selected">
                                    <option>Refine by season</option>
                                    <option v-for="st in seasonStrings">{{ st.season }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <hr class="hr"/>
        </div>

        <TeamTable :teams="teams" v-on:sortTeams="handleSortEventEmit"/>
    </div>
</template>

<script>
    import TeamTable from "../../components/tables/TeamTable";
    import axios from 'axios';

    export default {
        name: "Teams",
        components: {
            TeamTable
        },
        data() {
            return {
                teams: [],
                currentSeason: '2018-2019',
                seasonStrings: [],
                selected: 'Refine by season'
            }
        },
        created() {
            this.getSeasonStrings();
            this.getTeams(this.currentSeason, 'points', 'desc');
            this.getCurrentSeasonString();
        },
        methods: {
            getTeams: function (season, field, order) {
                axios.get(this.domain + '/api/team/all-active' + '?seasonString=' + season + '&field=' + field + '&order=' + order)
                    .then(response => {
                        this.teams = response.data.data;
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getCurrentSeasonString: function () {
                axios.get(this.domain + '/api/current-season')
                    .then(response => {
                        this.currentSeason = response.data.data;
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            handleSortEventEmit(sortQuery) {
                this.getTeams(this.currentSeason, sortQuery.param, sortQuery.value)
            },
            getSeasonStrings() {
                axios.get(this.domain + '/api/season-strings')
                    .then(response => {
                        this.seasonStrings = response.data.data;
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            handleSelect(selection) {
                if (selection !== 'Refine by season' && selection !== this.currentSeason) {
                    this.teams = [];
                    this.selected = selection;
                    this.currentSeason = selection;
                    this.getTeams(this.selected, 'points', 'desc');
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
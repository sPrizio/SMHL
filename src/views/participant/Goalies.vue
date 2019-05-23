<template>
    <div id="goalies" class="view">
        <section class="hero is-small">
            <div class="hero-body">
                <div class="container">
                    <br />
                    <div class="columns is-multiline">
                        <div class="column is-6-desktop is-12-tablet is-12-mobile">
                            <h1 class="title">
                                Active Goalies
                            </h1>
                            <h2 class="subtitle">
                                A comprehensive look at all active goalie for the {{ this.currentSeason }} season
                            </h2>
                        </div>
                        <div class="column is-6-desktop is-12-tablet is-12-mobile has-text-right">
                            <div class="select">
                                <label for="goalie-list"></label>
                                <select id="goalie-list" name="goalie-list" v-on:change="handleSelect(selected)" v-model="selected">
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

        <GoalieTable :goalies="goalies" v-on:sortGoalies="handleSortEventEmit"/>
    </div>
</template>

<script>
    import GoalieTable from "../../components/tables/GoalieTable";
    import axios from 'axios';

    export default {
        name: "Goalies",
        components: {
            GoalieTable
        },
        data() {
            return {
                goalies: [],
                currentSeason: '',
                seasonStrings: [],
                selected: 'Refine by season'
            }
        },
        created() {

        },
        methods: {
            getGoalies: function (season, field, order) {
                axios.get(this.domain + '/api/goalie/all-active' + '?seasonString=' + season + '&field=' + field + '&order=' + order)
                    .then(response => {
                        this.goalies = response.data.data;
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
                this.getGoalies(this.currentSeason, sortQuery.param, sortQuery.value)
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
                    this.goalies = [];
                    this.selected = selection;
                    this.currentSeason = selection;
                    this.getGoalies(this.selected, 'points', 'desc');
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
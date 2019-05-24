<template>
    <div id="skaters" class="view">
        <section class="hero is-small">
            <div class="hero-body">
                <div class="container">
                    <br />
                    <div class="columns is-multiline">
                        <div class="column is-6-desktop is-12-tablet is-12-mobile">
                            <h1 class="title">
                                Active Skaters
                            </h1>
                            <h2 class="subtitle">
                                A comprehensive look at all active skaters for the {{ this.currentSeason }} season
                            </h2>
                        </div>
                        <div class="column is-6-desktop is-12-tablet is-12-mobile has-text-right">
                            <div class="select">
                                <label for="skater-list"></label>
                                <select id="skater-list" name="skater-list" v-on:change="handleSelect(selected)" v-model="selected">
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
            <hr class="hr" />
        </div>

        <SkaterTable :skaters="skaters" v-on:sortSkaters="handleSortEventEmit"/>
    </div>
</template>

<script>
    import SkaterTable from "../../components/tables/SkaterTable";
    import axios from 'axios';

    export default {
        name: "Skaters",
        components: {
            SkaterTable
        },
        data() {
            return {
                skaters: [],
                currentSeason: '',
                seasonStrings: [],
                selected: 'Refine by season'
            }
        },
        created() {
            this.getSeasonStrings();
            this.getCurrentSeasonString();
            this.getSkaters(this.cs, 'points', 'desc');
        },
        methods: {

            //  gets all active skaters
            getSkaters: function (season, field, order) {
                axios.get(this.domain + '/api/skater/all-active' + '?seasonString=' + season + '&field=' + field + '&order=' + order)
                    .then(response => {
                        this.skaters = response.data.data;
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
                    });
            },
            handleSortEventEmit(sortQuery) {
                this.getSkaters(this.currentSeason, sortQuery.param, sortQuery.value)
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
                    this.skaters = [];
                    this.selected = selection;
                    this.currentSeason = selection;
                    this.getSkaters(this.selected, 'points', 'desc');
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
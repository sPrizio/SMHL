<template>
    <div id="scores">
        <section class="hero is-white">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-multiline">
                        <div class="column is-6-desktop is-12-tablet is-12-mobile">
                            <h1 class="title">
                                Scores
                            </h1>
                            <h2 class="subtitle">
                                A look at previous and upcoming games for a season
                            </h2>
                        </div>
                        <div class="column is-6-desktop is-12-tablet is-12-mobile has-text-right">
                            <div class="select">
                                <label for="season-list"></label>
                                <select id="season-list" name="season-list" v-on:change="handleSelect(selected)"
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

        <!-- TODO: implement game table component -->
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Scores",
        components: {},
        data() {
            return {
                games: [],
                currentSeason: '',
                seasonStrings: [],
                selected: 'Refine by season'
            }
        },
        created() {
            this.getSeasonStrings();
            this.getCurrentSeasonString();
            this.getGames(this.cs)
        },
        methods: {
            getGames: function (season) {
                axios.get(this.domain + '/api/game/all-for-season?seasonString' + season)
                    .then(response => {
                        this.games = response.data.data;
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getSeasonStrings: function () {
                axios.get(this.domain + '/api/season-strings')
                    .then(response => {
                        this.seasonStrings = response.data.data;
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            handleSelect: function (selection) {
                if (selection !== 'Refine by season' && selection !== this.currentSeason) {
                    this.games = [];
                    this.selected = selection;
                    this.currentSeason = selection;
                    this.getGames(this.selected);
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
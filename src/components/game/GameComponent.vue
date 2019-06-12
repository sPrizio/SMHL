<template>
    <div id="game">
        <section class="hero is-white">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-multiline">
                        <div class="column is-5-desktop is-6-tablet is-12-mobile is-offset-1-desktop">
                            <h1 class="title">
                                {{ this.game.homeTeam.name }}
                            </h1>
                            <h2 class="subtitle">
                                {{ this.game.gameDetails.homeTeamScore }}
                            </h2>
                        </div>
                        <div class="column is-5-desktop is-6-tablet is-12-mobile has-text-right">
                            <h1 class="title">
                                {{ this.game.awayTeam.name }}
                            </h1>
                            <h2 class="subtitle">
                                {{ this.game.gameDetails.awayTeamScore }}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop">
                    <div class="tabs is-centered is-medium">
                        <ul>
                            <li v-bind:class="activeHome" v-on:click="toggleTab">
                                <a>Home</a>
                            </li>
                            <li v-bind:class="activeAway" v-on:click="toggleTab">
                                <a>Away</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                Game Details
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop"
                     v-if="this.activeTab === 'home'">
                    <div class="columns is-multiline">
                        <div class="column is-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        Home Goalie Game Details
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        Home Player Game Details
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop"
                     v-if="this.activeTab === 'away'">
                    <div class="columns is-multiline">
                        <div class="column is-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        Away Goalie Game Details
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        Away Player Game Details
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "GameComponent",
        data: function () {
            return {
                game: '',
                activeTab: 'home'
            }
        },
        created () {
          this.getGame();
        },
        computed: {
            activeHome: function () {
                return this.activeTab === 'home' ? 'is-active' : '';
            },
            activeAway: function () {
                return this.activeTab === 'away' ? 'is-active' : '';
            }
        },
        methods: {
            getGame: function () {
                axios.all([
                    axios.get(this.domain + '/api/game/' + this.$route.params.id)
                ])
                    .then(axios.spread((gRes) => {
                        this.game = gRes.data.data;
                    }))
                    .catch(error => {
                        console.log(error)
                    })
            },
            toggleTab: function () {
                this.activeTab = this.activeTab === 'home' ? 'away' : 'home';
            },
        }
    }
</script>

<style scoped lang="scss">

</style>
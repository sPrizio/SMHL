<template>
    <div>
        <section class="hero is-white">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Create Game
                    </h1>
                    <h2 class="subtitle">
                        The game creation page for complete and incomplete games
                    </h2>
                </div>
            </div>
        </section>

        <div class="container">
            <hr class="hr"/>

            <div class="columns is-multiline">
                <div class="column is-6-desktop is-8-tablet is-12-mobile is-offset-3-desktop is-offset-2-tablet">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                New Game
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <div class="field">
                                    <label class="label" for="gameTime">Game Time</label>
                                    <div class="control">
                                        <input id="gameTime" class="input" type="text" placeholder="YYYY-MM-DD HH:mm:ss" v-model="gT">
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label" for="seasonString">Season String</label>
                                    <div class="control">
                                        <div class="select is-rounded is-fullwidth">
                                            <select id="seasonString" name="seasonString" v-model="sS">
                                                <option v-for="s in seasonStrings">{{ s.season }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label" for="gameStatus">Game Status</label>
                                    <div class="control">
                                        <div class="select is-rounded is-fullwidth">
                                            <select id="gameStatus" name="gameStatus" v-model="gS">
                                                <option v-for="g in gameStatus">{{ g }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label" for="homeTeam">Home Team</label>
                                    <div class="control">
                                        <div class="select is-rounded is-fullwidth">
                                            <select id="homeTeam" name="homeTeam" v-model="hT">
                                                <option v-for="t in teams">{{ t.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label" for="awayTeam">Away Team</label>
                                    <div class="control">
                                        <div class="select is-rounded is-fullwidth">
                                            <select id="awayTeam" name="awayTeam" v-model="aT">
                                                <option v-for="t in teams">{{ t.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="submit-button" v-on:click="submitForm()">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "CreateGame",
        data: function () {
            return {
                seasonStrings: [],
                gameStatus: [],
                teams: [],
                gT: '',
                sS: 'Select an option',
                gS: 'Select an option',
                hT: 'Select an option',
                aT: 'Select an option'
            }
        },
        created() {
            this.getSeasonStrings();
            this.getGameStatus();
            this.getTeams();
        },
        methods: {
            getSeasonStrings() {
                axios.get(this.domain + '/api/season-strings')
                    .then(response => {
                        this.seasonStrings = response.data.data;
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getGameStatus() {
                axios.get(this.domain + '/api/game/status-enums')
                    .then(response => {
                        this.gameStatus = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getTeams() {
                axios.get(this.domain + '/api/team/all-active?seasonString=' + this.cs + '&field=name&order=asc')
                    .then(response => {
                        this.teams = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            submitForm() {
                axios.post('/api/game/create', {
                    gameTime: this.gT,
                    seasonString: this.sS,
                    gameStatus: this.gS,
                    homeTeam: this.hT,
                    awayTeam: this.aT
                })
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    });
            }
        }
    }
</script>

<style scoped lang="scss">

    .submit-button {
        padding: 10px 0 10px 0;
        text-align: center;
        background-color: dodgerblue;
        color: white;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;

        &:hover {
            cursor: pointer;
        }
    }

</style>
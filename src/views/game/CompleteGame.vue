<template>
    <div id="complete-game">
        <section class="hero is-white">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Complete Game
                    </h1>
                    <h2 class="subtitle">
                        Data entry for a game that is now finished
                    </h2>
                </div>
            </div>
        </section>

        <div class="container">
            <hr class="hr"/>

            <h2 class="subtitle">TODO</h2>
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <article class="tile is-child notification is-danger">
                        <div class="content">
                            <p class="title">Game Details</p>
                            <p class="subtitle">gameTime | LocalDateTime</p>
                            <p class="subtitle">homeTeamScore | Integer</p>
                            <p class="subtitle">awayTeamScore | Integer</p>
                            <p class="subtitle">skaterGameDetails | Set&#60;SkaterGameDetails&#62;</p>
                            <p class="subtitle">goalieGameDetails | Set&#60;GoalieGameDetails&#62;</p>
                            <p class="subtitle">teamGameDetails | Set&#60;TeamGameDetails&#62;</p>
                            <p class="subtitle">scoringPlays | Set&#60;ScoringPlays&#62;</p>
                        </div>
                    </article>
                </div>
                <div class="tile is-vertical is-7">
                    <div class="tile">
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-danger">
                                <p class="title">SkaterGameDetails</p>
                                <p class="subtitle">gameTime | LocalDateTime</p>
                                <p class="subtitle">participant | Skater</p>
                                <p class="subtitle">team | Team</p>
                                <p class="subtitle">goals | Integer</p>
                                <p class="subtitle">assists | Integer</p>
                                <p class="subtitle">shots | Integer</p>
                                <p class="subtitle">blockedShots | Integer</p>
                            </article>
                            <article class="tile is-child notification is-danger">
                                <p class="title">TeamGameDetails</p>
                                <p class="subtitle">gameTime | LocalDateTime</p>
                                <p class="subtitle">participant | Team</p>
                                <p class="subtitle">gameResult | String</p>
                                <p class="subtitle">goalsFor | Integer</p>
                                <p class="subtitle">goalsAgainst | Integer</p>
                            </article>
                        </div>
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-danger">
                                <p class="title">GoalieGameDetails</p>
                                <p class="subtitle">gameTime | LocalDateTime</p>
                                <p class="subtitle">participant | Goalie</p>
                                <p class="subtitle">team | Team</p>
                                <p class="subtitle">isStarter | Boolean</p>
                                <p class="subtitle">gameResult | String</p>
                                <p class="subtitle">shotsAgainst | Integer</p>
                                <p class="subtitle">saves | Integer</p>
                                <p class="subtitle">goalsAgainst | Integer</p>
                            </article>
                            <article class="tile is-child notification is-danger">
                                <p class="title">ScoringPlays</p>
                                <p class="subtitle">team | Team</p>
                                <p class="subtitle">scoringSkater | Skater</p>
                                <p class="subtitle">primaryAssistingSkater | Skater</p>
                                <p class="subtitle">secondaryAssistingSkater | Skater</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns is-multiline">
                <div class="column is-12">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-success">
                                <div class="content">
                                    <p class="title">Game</p>
                                    <p class="subtitle">gameTime | LocalDateTime</p>
                                    <p class="subtitle">seasonString | String</p>
                                    <p class="subtitle">gameStatus | String</p>
                                    <p class="subtitle">homeTeam | Team</p>
                                    <p class="subtitle">awayTeam | Team</p>
                                    <p class="subtitle">gameDetails | GameDetails</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="hr"/>

            <div class="columns is-multiline">
                <div class="column is-12">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                {{ this.game.homeTeam.name }}
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <div class="columns is-multiline">
                                    <div class="column is-4-desktop is-12-tablet is-12-mobile">
                                        <p class="subtitle">Goalies</p>
                                        <hr class="hr"/>
                                        <div class="columns is-multiline">
                                            <div class="column is-6">
                                                <div class="field">
                                                    <label for="goalieName" class="label">Goalie</label>
                                                    <div class="control">
                                                        <div class="select">
                                                            <select id="goalieName" name="goalieName">
                                                                <option>Select dropdown</option>
                                                                <option>With options</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-6">
                                                <div class="field">
                                                    <div class="control">
                                                        <br/>
                                                        <label class="checkbox">
                                                            <input type="checkbox">
                                                            Started Game?
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-4">
                                                <div class="field">
                                                    <div class="control">
                                                        <label for="shotsAgainst" class="label">Shots Against</label>
                                                        <input id="shotsAgainst" name="shotsAgainst" class="input"
                                                               type="number" placeholder="0"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-4">
                                                <div class="field">
                                                    <div class="control">
                                                        <label for="saves" class="label">Saves</label>
                                                        <input id="saves" name="saves" class="input" type="number"
                                                               placeholder="0"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-4">
                                                <div class="field">
                                                    <div class="control">
                                                        <label for="goalsAgainst" class="label">Goals Against</label>
                                                        <input id="goalsAgainst" name="goalsAgainst" class="input"
                                                               type="number" placeholder="0"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column is-4-desktop is-12-tablet is-12-mobile">
                                        <p class="subtitle">
                                            Skaters
                                        </p>
                                        <hr class="hr"/>
                                    </div>
                                    <div class="column is-4-desktop is-12-tablet is-12-mobile">
                                        <p class="subtitle">
                                            Team
                                        </p>
                                        <hr class="hr"/>
                                    </div>
                                    <div class="column is-12">
                                        <p class="subtitle">
                                            Scoring Plays
                                        </p>
                                        <hr class="hr"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-12">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                {{ this.game.awayTeam.name }}
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">

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
        name: "CompleteGame",
        data: function () {
            return {
                game: ''
            }
        },
        created() {
            this.getGame();
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
        }
    }
</script>

<style scoped lang="scss">

</style>
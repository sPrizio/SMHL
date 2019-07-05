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
            <h3>Red = No yet started</h3>
            <h3>Yellow = UI complete, data is not ready for axios post</h3>
            <h3>Green = Good to go to back end</h3>
            <br />
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
                            <article class="tile is-child notification is-warning">
                                <p class="title">SkaterGameDetails</p>
                                <p class="subtitle">gameTime | LocalDateTime</p>
                                <p class="subtitle">participant | Skater</p>
                                <p class="subtitle">team | Team</p>
                                <p class="subtitle">goals | Integer</p>
                                <p class="subtitle">assists | Integer</p>
                                <p class="subtitle">shots | Integer</p>
                                <p class="subtitle">blockedShots | Integer</p>
                            </article>
                            <article class="tile is-child notification is-warning">
                                <p class="title">TeamGameDetails</p>
                                <p class="subtitle">gameTime | LocalDateTime</p>
                                <p class="subtitle">participant | Team</p>
                                <p class="subtitle">gameResult | String</p>
                                <p class="subtitle">goalsFor | Integer</p>
                                <p class="subtitle">goalsAgainst | Integer</p>
                            </article>
                        </div>
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-warning">
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
                            <article class="tile is-child notification is-warning">
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
                                        <nav class="level">
                                            <div class="level-left">
                                                <div class="level-item">
                                                    <p class="subtitle">Goalie Details</p>
                                                </div>
                                            </div>
                                            <div class="level-right">
                                                <div class="level-item">
                                                    <div class="button is-success" v-on:click="addGoalie('home')">
                                                        Add
                                                    </div>
                                                </div>
                                                <div class="level-item">
                                                    <div class="button is-light" v-on:click="removeGoalie('home')">
                                                        Remove
                                                    </div>
                                                </div>
                                            </div>
                                        </nav>
                                        <hr class="hr"/>
                                        <div v-for="(gGD, index) in homeGoalieGameDetails">
                                            <GoalieGameDetailsComponent :goalies="goalies" :count="index + 1" :game-time="game.gameTime.toString()" :team="game.homeTeam.code"/>
                                        </div>
                                    </div>
                                    <div class="column is-4-desktop is-12-tablet is-12-mobile">
                                        <nav class="level">
                                            <div class="level-left">
                                                <div class="level-item">
                                                    <p class="subtitle">Skater Details</p>
                                                </div>
                                            </div>
                                            <div class="level-right">
                                                <div class="level-item">
                                                    <div class="button is-success" v-on:click="addSkater('home')">
                                                        Add
                                                    </div>
                                                </div>
                                                <div class="level-item">
                                                    <div class="button is-light" v-on:click="removeSkater('home')">
                                                        Remove
                                                    </div>
                                                </div>
                                            </div>
                                        </nav>
                                        <hr class="hr"/>
                                        <div v-for="(sGD, index) in homeSkaterGameDetails">
                                            <SkaterGameDetailsComponent :skaters="skaters" :count="index + 1" :game-time="game.gameTime.toString()" :team="game.homeTeam.code"/>
                                        </div>
                                    </div>
                                    <div class="column is-4-desktop is-12-tablet is-12-mobile">
                                        <p class="subtitle">
                                            Team Details
                                        </p>
                                        <hr class="hr"/>
                                        <div class="columns is-multiline">
                                            <div class="column is-4">
                                                <div class="field">
                                                    <label for="homeGameResult" class="label">Result</label>
                                                    <div class="control">
                                                        <div class="select is-fullwidth">
                                                            <select id="homeGameResult" name="homeGameResult">
                                                                <option>Win</option>
                                                                <option>Loss</option>
                                                                <option>Tie</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-4">
                                                <div class="field">
                                                    <div class="control">
                                                        <label for="homeGoalsFor" class="label">Goals For</label>
                                                        <input id="homeGoalsFor" name="homeGoalsFor" class="input"
                                                               type="number" placeholder="0"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-4">
                                                <div class="field">
                                                    <div class="control">
                                                        <label for="homeGoalsAgainst" class="label">Goals Against</label>
                                                        <input id="homeGoalsAgainst" name="homeGoalsAgainst" class="input"
                                                               type="number" placeholder="0"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="hr"/>
                                    </div>
                                    <div class="column is-12">
                                        <nav class="level">
                                            <div class="level-left">
                                                <div class="level-item">
                                                    <p class="subtitle">
                                                        Scoring Plays
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="level-right">
                                                <div class="level-item">
                                                    <div class="button is-success" v-on:click="addScoringPlay('home')">
                                                        Add
                                                    </div>
                                                </div>
                                                <div class="level-item">
                                                    <div class="button is-light" v-on:click="removeScoringPlay('home')">
                                                        Remove
                                                    </div>
                                                </div>
                                            </div>
                                        </nav>
                                        <hr class="hr"/>
                                        <div v-if="homeScoringPlays.length > 0" v-for="sp in homeScoringPlays">
                                            <ScoringPlayComponent :skaters="skaters" :team="game.homeTeam.code"/>
                                        </div>
                                        <div v-if="homeScoringPlays.length === 0" class="has-text-centered">
                                            <p class="subtitle">
                                                There were no scoring plays for this team.
                                            </p>
                                        </div>
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
                                <div class="columns is-multiline">
                                    <div class="column is-4-desktop is-12-tablet is-12-mobile">
                                        <nav class="level">
                                            <div class="level-left">
                                                <div class="level-item">
                                                    <p class="subtitle">Goalie Details</p>
                                                </div>
                                            </div>
                                            <div class="level-right">
                                                <div class="level-item">
                                                    <div class="button is-success" v-on:click="addGoalie('away')">
                                                        Add
                                                    </div>
                                                </div>
                                                <div class="level-item">
                                                    <div class="button is-light" v-on:click="removeGoalie('away')">
                                                        Remove
                                                    </div>
                                                </div>
                                            </div>
                                        </nav>
                                        <hr class="hr"/>
                                        <div v-for="(gGD, index) in awayGoalieGameDetails">
                                            <GoalieGameDetailsComponent :goalies="goalies" :count="index + 1" :game-time="game.gameTime.toString()" :team="game.awayTeam.code"/>
                                        </div>
                                    </div>
                                    <div class="column is-4-desktop is-12-tablet is-12-mobile">
                                        <nav class="level">
                                            <div class="level-left">
                                                <div class="level-item">
                                                    <p class="subtitle">Skater Details</p>
                                                </div>
                                            </div>
                                            <div class="level-right">
                                                <div class="level-item">
                                                    <div class="button is-success" v-on:click="addSkater('away')">
                                                        Add
                                                    </div>
                                                </div>
                                                <div class="level-item">
                                                    <div class="button is-light" v-on:click="removeSkater('away')">
                                                        Remove
                                                    </div>
                                                </div>
                                            </div>
                                        </nav>
                                        <hr class="hr"/>
                                        <div v-for="(sGD, index) in awaySkaterGameDetails">
                                            <SkaterGameDetailsComponent :skaters="skaters" :count="index + 1" :game-time="game.gameTime.toString()" :team="game.awayTeam.code"/>
                                        </div>
                                    </div>
                                    <div class="column is-4-desktop is-12-tablet is-12-mobile">
                                        <p class="subtitle">
                                            Team Details
                                        </p>
                                        <hr class="hr"/>
                                        <div class="columns is-multiline">
                                            <div class="column is-4">
                                                <div class="field">
                                                    <label for="awayGameResult" class="label">Result</label>
                                                    <div class="control">
                                                        <div class="select is-fullwidth">
                                                            <select id="awayGameResult" name="awayGameResult">
                                                                <option>Win</option>
                                                                <option>Loss</option>
                                                                <option>Tie</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-4">
                                                <div class="field">
                                                    <div class="control">
                                                        <label for="awayGoalsFor" class="label">Goals For</label>
                                                        <input id="awayGoalsFor" name="awayGoalsFor" class="input"
                                                               type="number" placeholder="0"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-4">
                                                <div class="field">
                                                    <div class="control">
                                                        <label for="awayGoalsAgainst" class="label">Goals Against</label>
                                                        <input id="awayGoalsAgainst" name="awayGoalsAgainst" class="input"
                                                               type="number" placeholder="0"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="hr"/>
                                    </div>
                                    <div class="column is-12">
                                        <nav class="level">
                                            <div class="level-left">
                                                <div class="level-item">
                                                    <p class="subtitle">
                                                        Scoring Plays
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="level-right">
                                                <div class="level-item">
                                                    <div class="button is-success" v-on:click="addScoringPlay('away')">
                                                        Add
                                                    </div>
                                                </div>
                                                <div class="level-item">
                                                    <div class="button is-light" v-on:click="removeScoringPlay('away')">
                                                        Remove
                                                    </div>
                                                </div>
                                            </div>
                                        </nav>
                                        <hr class="hr"/>
                                        <div v-if="awayScoringPlays.length > 0" v-for="sp in awayScoringPlays">
                                            <ScoringPlayComponent :skaters="skaters" :team="game.awayTeam.code"/>
                                        </div>
                                        <div v-if="awayScoringPlays.length === 0" class="has-text-centered">
                                            <p class="subtitle">
                                                There were no scoring plays for this team.
                                            </p>
                                        </div>
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
    import GoalieGameDetailsComponent from "../../components/game/details/GoalieGameDetailsComponent";
    import SkaterGameDetailsComponent from "../../components/game/details/SkaterGameDetailsComponent";
    import ScoringPlayComponent from "../../components/game/details/ScoringPlayComponent";

    export default {
        name: "CompleteGame",
        components: {ScoringPlayComponent, SkaterGameDetailsComponent, GoalieGameDetailsComponent},
        data: function () {
            return {
                game: '',
                homeGoalieGameDetails: [],
                awayGoalieGameDetails: [],
                homeSkaterGameDetails: [],
                awaySkaterGameDetails: [],
                homeScoringPlays: [],
                awayScoringPlays: [],
                goalies: [],
                skaters: [],
            }
        },
        created() {
            this.getGame();
            this.addGoalie('home');
            this.addGoalie('away');
            this.addSkater('home');
            this.addSkater('away');
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
            addGoalie(side) {
                if (side === 'home') {
                    this.homeGoalieGameDetails.push('goalie');
                } else {
                    this.awayGoalieGameDetails.push('goalie');
                }
            },
            removeGoalie(side) {
                if (side === 'home') {
                    if (this.homeGoalieGameDetails.length > 1) {
                        this.homeGoalieGameDetails.pop();
                    }
                } else {
                    if (this.awayGoalieGameDetails.length > 1) {
                        this.awayGoalieGameDetails.pop();
                    }
                }
            },
            addSkater(side) {
                if (side === 'home') {
                    this.homeSkaterGameDetails.push('skater');
                } else {
                    this.awaySkaterGameDetails.push('skater');
                }
            },
            removeSkater(side) {
                if (side === 'home') {
                    if (this.homeSkaterGameDetails.length > 1) {
                        this.homeSkaterGameDetails.pop();
                    }
                } else {
                    if (this.awaySkaterGameDetails.length > 1) {
                        this.awaySkaterGameDetails.pop();
                    }
                }
            },
            addScoringPlay(side) {
                if (side === 'home') {
                    this.homeScoringPlays.push('scoringPlay');
                } else {
                    this.awayScoringPlays.push('scoringPlay');
                }
            },
            removeScoringPlay(side) {
                if (side === 'home') {
                    this.homeScoringPlays.pop();
                } else {
                    this.awayScoringPlays.pop();
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .bordered {
        border: 2px solid rgba(155, 155, 255, 0.25);
        border-radius: 25px;
    }

</style>
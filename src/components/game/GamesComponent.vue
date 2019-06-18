<template>
    <div>
        <div class="card" v-if="game.gameStatus === 'COMPLETE'">
            <div class="card-content">
                <div class="content">
                    <div class="columns is-multiline">
                        <div class="column is-3">
                            <p>{{ game.gameDetails.homeTeamScore }} | {{ game.homeTeam.name }}</p>
                            <p>{{ game.gameDetails.awayTeamScore }} | {{ game.awayTeam.name }}</p>
                        </div>
                        <div class="column is-5 has-text-centered">
                            <div class="columns is-multiline">
                                <div class="column is-6 has-text-left">
                                    <strong>Home</strong>
                                    <p v-for="(skater, index) in game.gameDetails.skaterGameDetails" v-if="skater.team.code === game.homeTeam.code">
                                        | {{ skater.goals }} G - {{ skater.assists }} A |
                                        {{ index }}
                                        {{ skater.skater.name }}
                                    </p>
                                </div>
                                <div class="column is-6 has-text-right">
                                    <strong>Away</strong>
                                    <p v-for="(skater, index) in game.gameDetails.skaterGameDetails" v-if="skater.team.code === game.awayTeam.code">
                                        {{ index }}
                                        {{ skater.skater.name }}
                                        | {{ skater.goals }} G - {{ skater.assists }} A |
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="column is-4 has-text-centered">
                            <p>{{ formatDate(game.gameTime) }}</p>
                            <small>{{ formatTime(game.gameTime) }}</small>
                            <br />
                            <router-link :to="{ name: 'game', params: { id: game.code } }">
                                Score sheet
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" v-else>
            <div class="card-content">
                <div class="content">
                    <div class="columns is-multiline">
                        <div class="column is-3">
                            <p>0 | {{ game.homeTeam.name }}</p>
                            <p>0 | {{ game.awayTeam.name }}</p>
                        </div>
                        <div class="column is-5 has-text-centered">
                            <p>This game has not yet started</p>
                        </div>
                        <div class="column is-4 has-text-centered">
                            <p>{{ formatDate(game.gameTime) }}</p>
                            <small>{{ formatTime(game.gameTime) }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: "GamesComponent",
        props: {
            game: Object
        },
        methods: {
            formatDate: function (date) {
                return moment(date).format('MMM DD');
            },
            formatTime: function (time) {
                return moment(time).format('HH:mm')
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
<template>
    <div id="games">
        <GameComponent :game="game"/>
    </div>
</template>

<script>
    import GameComponent from "../../components/game/GameComponent";
    import axios from 'axios';

    export default {
        name: "Game",
        components: {
            GameComponent
        },
        data: function () {
            return {
                game: ''
            }
        },
        created() {
            this.getGame()
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
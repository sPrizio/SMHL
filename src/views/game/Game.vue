<template>
    <div id="games">
        <GameComponent :game="game" :stars="stars"/>
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
                game: '',
                stars: []
            }
        },
        created() {
            this.getGame()
        },
        methods: {
            getGame: function () {
                axios.all([
                    axios.get(this.domain + '/api/game/' + this.$route.params.id),
                    axios.get(this.domain + '/api/game/' + this.$route.params.id + '/three-stars')
                ])
                    .then(axios.spread((gRes, sRes) => {
                        this.game = gRes.data.data;
                        this.stars = sRes.data.data;
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
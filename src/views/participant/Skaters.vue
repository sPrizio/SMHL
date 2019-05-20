<template>
    <div id="skaters">
        <section class="hero is-small">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Active Skaters
                    </h1>
                    <h2 class="subtitle">
                        A comprehensive look at all active skaters for the {{ this.currentSeason }} season
                    </h2>
                </div>
            </div>
        </section>

        <div class="container">
            <hr/>
        </div>

        <SkaterTable :skaters="skaters" v-on:sortSkaters="handleSortEvenEmit"/>
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
                currentSeason: ''
            }
        },
        created() {
            this.getSkaters('last_name', 'asc');
            this.getCurrentSeasonString();
        },
        methods: {

            //  gets all active skaters
            getSkaters: function (field, order) {
                axios.get(this.domain + '/api/skater/all-active' + '?field=' + field + '&order=' + order)
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
                    })
            },
            handleSortEvenEmit(sortQuery) {
                this.getSkaters(sortQuery.param, sortQuery.value)
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
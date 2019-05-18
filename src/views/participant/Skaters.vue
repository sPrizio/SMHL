<template>
    <div id="skaters">
        <h2>This is the skaters view</h2>
        <SkaterTable :skaters="skaters"/>
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
                skaters: []
            }
        },
        created() {
            this.performApiCall();
        },
        methods: {
            performApiCall: function () {
                axios.get(this.domain + '/api/skater/all-active')
                    .then(response => {
                        this.skaters = response.data.data;
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
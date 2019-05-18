<template>
    <div>
        This is the skater table component

        <ul>
            <li v-for="skater in skaters">
                {{ skater.firstName }}&nbsp;{{ skater.lastName }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SkaterTable",
        props: {
            skaters: Array
        }
    }
</script>

<style scoped lang="scss">

</style>
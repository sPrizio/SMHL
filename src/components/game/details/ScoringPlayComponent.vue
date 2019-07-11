<template>
    <div>
        <div class="columns is-multiline">
            <div class="column is-1">
                <p class="subtitle">
                    {{ index + 1}})
                </p>
            </div>
            <div class="column is-3">
                <div class="field">
                    <label for="scoringSkater" class="label">Goal Scorer</label>
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select id="scoringSkater" name="scoringSkater" v-model="scoring">
                                <option :value="-1">None</option>
                                <option v-for="skater in skaters" :value="skater.code">{{ skater.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-4">
                <div class="field">
                    <label for="primaryAssistingSkater" class="label">Primary Assisting Skater</label>
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select id="primaryAssistingSkater" name="primaryAssistingSkater" v-model="primary">
                                <option :value="-1">None</option>
                                <option v-for="skater in skaters" :value="skater.code">{{ skater.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-4">
                <div class="field">
                    <label for="secondaryAssistingSkater" class="label">Secondary Assisting Skater</label>
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select id="secondaryAssistingSkater" name="secondaryAssistingSkater" v-model="secondary">
                                <option :value="-1">None</option>
                                <option v-for="skater in skaters" :value="skater.code">{{ skater.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="hr"/>
    </div>
</template>

<script>
    export default {
        name: "ScoringPlayComponent",
        props: {
            index: Number,
            skaters: Array,
            team: Number
        },
        data: function () {
            return {
                scoring: 0,
                primary: 0,
                secondary: 0
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
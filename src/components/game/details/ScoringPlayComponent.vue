<template>
    <div>
        <div class="columns is-multiline">
            <div class="column is-4">
                <div class="field">
                    <label for="scoringSkater" class="label">Goal Scorer</label>
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select id="scoringSkater" name="scoringSkater">
                                <option>Select dropdown</option>
                                <option>With options</option>
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
                            <select id="primaryAssistingSkater" name="primaryAssistingSkater">
                                <option>Select dropdown</option>
                                <option>With options</option>
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
                            <select id="secondaryAssistingSkater" name="secondaryAssistingSkater">
                                <option>Select dropdown</option>
                                <option>With options</option>
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
            skaters: [],
            team: Number
        }
    }
</script>

<style scoped lang="scss">

</style>
<template>
    <div>
        <div class="columns is-multiline">
            <div class="column is-6">
                <div class="field">
                    <label for="skaterName" class="label">Skater {{ count }}</label>
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select id="skaterName" name="skaterName">
                                <option v-for="skater in skaters">{{ skater.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-3">
                <div class="field">
                    <div class="control">
                        <label for="goals" class="label">Goals</label>
                        <input id="goals" name="goals" class="input"
                               type="number" placeholder="0"/>
                    </div>
                </div>
            </div>
            <div class="column is-3">
                <div class="field">
                    <div class="control">
                        <label for="assists" class="label">Assists</label>
                        <input id="assists" name="assists" class="input"
                               type="number" placeholder="0"/>
                    </div>
                </div>
            </div>
            <div class="column is-4 is-offset-2">
                <div class="field">
                    <div class="control">
                        <label for="shots" class="label">Shots</label>
                        <input id="shots" name="shotsAgainst" class="input"
                               type="number" placeholder="0"/>
                    </div>
                </div>
            </div>
            <div class="column is-4">
                <div class="field">
                    <div class="control">
                        <label for="blockedShots" class="label">Blk Shots</label>
                        <input id="blockedShots" name="blockedShots" class="input"
                               type="number" placeholder="0"/>
                    </div>
                </div>
            </div>
        </div>
        <hr class="hr"/>
    </div>
</template>

<script>
    export default {
        name: "SkaterGameDetailsComponent",
        props: {
            skaters: Array,
            count: Number,
            gameTime: String,
            team: Number
        }
    }
</script>

<style scoped lang="scss">

</style>
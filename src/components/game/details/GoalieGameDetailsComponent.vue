<template>
    <div>
        <div class="columns is-multiline">
            <div class="column is-6">
                <div class="field">
                    <label for="goalieName" class="label">Goalie {{ count }}</label>
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select id="goalieName" name="goalieName">
                                <option v-for="goalie in goalies">{{ goalie.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-6">
                <div class="field">
                    <label for="gameResult" class="label">Result</label>
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select id="gameResult" name="gameResult">
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
                        <label for="shotsAgainst" class="label">Shots Against</label>
                        <input id="shotsAgainst" name="shotsAgainst" class="input"
                               type="number" placeholder="0"/>
                    </div>
                </div>
            </div>
            <div class="column is-4">
                <div class="field">
                    <div class="control">
                        <label for="saves" class="label">Saves</label>
                        <input id="saves" name="saves" class="input" type="number"
                               placeholder="0"/>
                    </div>
                </div>
            </div>
            <div class="column is-4">
                <div class="field">
                    <div class="control">
                        <label for="goalsAgainst" class="label">Goals Against</label>
                        <input id="goalsAgainst" name="goalsAgainst" class="input"
                               type="number" placeholder="0"/>
                    </div>
                </div>
            </div>
            <div class="column is-4 is-offset-4">
                <div class="field">
                    <div class="control">
                        <br/>
                        <label class="checkbox">
                            <input type="checkbox">
                            Starter?
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <hr class="hr"/>
    </div>
</template>

<script>
    export default {
        name: "GoalieGameDetailsComponent",
        props: {
            goalies: Array,
            count: Number,
            gameTime: String,
            team: Number
        }
    }
</script>

<style scoped lang="scss">

</style>
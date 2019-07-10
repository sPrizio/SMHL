<template>
    <div>
        <div class="columns is-multiline">
            <div class="column is-6">
                <div class="field">
                    <label for="goalieName" class="label">Goalie {{ count }}</label>
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select id="goalieName" name="goalieName" v-model="goalie">
                                <option v-for="goalie in goalies" :value="goalie.code">{{ goalie.name }}</option>
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
                            <select id="gameResult" name="gameResult" v-model="result">
                                <option :value="'win'">Win</option>
                                <option :value="'loss'">Loss</option>
                                <option :value="'tie'">Tie</option>
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
                               type="number" v-model="shotsAgainst"/>
                    </div>
                </div>
            </div>
            <div class="column is-4">
                <div class="field">
                    <div class="control">
                        <label for="saves" class="label">Saves</label>
                        <input id="saves" name="saves" class="input" type="number"
                               v-model="saves"/>
                    </div>
                </div>
            </div>
            <div class="column is-4">
                <div class="field">
                    <div class="control">
                        <label for="goalsAgainst" class="label">Goals Against</label>
                        <input id="goalsAgainst" name="goalsAgainst" class="input"
                               type="number" v-model="goalsAgainst"/>
                    </div>
                </div>
            </div>
            <div class="column is-4 is-offset-4">
                <div class="field">
                    <div class="control">
                        <br/>
                        <label class="checkbox">
                            <input type="checkbox" v-model="starter">
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
        },
        data: function () {
            return {
                goalie: 0,
                result: '',
                starter: false,
                shotsAgainst: 0,
                saves: 0,
                goalsAgainst: 0
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
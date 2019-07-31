<template>
    <div>
        <section class="hero is-white">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Create Team
                    </h1>
                    <h2 class="subtitle">
                        The team creation page
                    </h2>
                </div>
            </div>
        </section>

        <div class="container">
            <hr class="hr"/>

            <div class="columns is-multiline">
                <div class="column is-6-desktop is-8-tablet is-12-mobile is-offset-3-desktop is-offset-2-tablet">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                New Team
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <div class="columns is-multiline">
                                    <div class="column is-5 is-offset-1">
                                        <div class="field">
                                            <label class="label" for="teamName">Team Name</label>
                                            <div class="control">
                                                <input id="teamName" class="input" type="text" v-model="teamName" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column is-5">
                                        <div class="field">
                                            <div class="control">
                                                <br />
                                                <label class="checkbox">
                                                    <input type="checkbox" v-model="active">
                                                    Active
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="submit-button" v-on:click="submitForm()">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "CreateTeam",
        data: function () {
            return {
                teamName: '',
                active: false
            }
        },
        methods : {
            submitForm() {
                axios.post(this.domain + '/api/team/create', {
                    teamName: this.teamName
                })
                    .then(response => {
                        if (response.data.response === 'SUCCESS') {
                            this.$router.push('standings')
                        } else {
                            console.log(response)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped lang="scss">

    .submit-button {
        padding: 10px 0 10px 0;
        text-align: center;
        background-color: dodgerblue;
        color: white;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;

        &:hover {
            cursor: pointer;
        }
    }

</style>
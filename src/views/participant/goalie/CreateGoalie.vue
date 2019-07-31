<template>
    <div>
        <section class="hero is-white">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Create Goalie
                    </h1>
                    <h2 class="subtitle">
                        The Goalie creation page
                    </h2>
                </div>
            </div>
        </section>

        <div class="container">
            <hr class="hr"/>

            <div class="colmnn is-multiline">
                <div class="column is-6-desktop is-8-tablet is-12-mobile is-offset-3-desktop is-offset-2-tablet">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                New Goalie
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <div class="columns is-multiline">
                                    <div class="column is-12">
                                        <div class="field">
                                            <label class="label" for="firstName">First name</label>
                                            <div class="control">
                                                <input id="firstName" class="input" type="text" v-model="firstName"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column is-12">
                                        <div class="field">
                                            <label class="label" for="lastName">Last name</label>
                                            <div class="control">
                                                <input id="lastName" class="input" type="text" v-model="lastName"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column is-6 is-offset-3 has-text-centered">
                                        <div class="field">
                                            <div class="control">
                                                <br/>
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
        name: "CreateGoalie",
        data: function () {
            return {
                firstName: '',
                lastName: '',
                active: false
            }
        },
        methods: {
            submitForm() {
                axios.post(this.domain + '/api/goalie/create', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    position: 'GOALIE',
                    active: this.active
                })
                    .then(response => {
                        if (response.data.response === 'SUCCESS') {
                            this.$router.push('goalies')
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
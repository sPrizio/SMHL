<template>
    <div>
        <section class="hero is-white">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        {{ this.skater.name }}
                    </h1>
                    <h2 class="subtitle">
                        {{ this.skater.position }}
                    </h2>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop">
                    <div class="tabs is-centered is-medium">
                        <ul>
                            <li v-bind:class="activeSeason" v-on:click="toggleTab">
                                <a>Season</a>
                            </li>
                            <li v-bind:class="activeCareer" v-on:click="toggleTab">
                                <a>Career</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop" v-if="this.activeTab === 'season'">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Season Stats
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <p>Table</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop" v-if="this.activeTab === 'season'">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Game Log
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <p>Table</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop" v-if="this.activeTab === 'season'">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Milestone Tracker
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <div class="columns is-multiline has-text-centered">
                                    <div class="column is-4-desktop is-6-tablet is-12-mobile">
                                        <p>Milestone 1</p>
                                    </div>
                                    <div class="column is-4-desktop is-6-tablet is-12-mobile">
                                        <p>Milestone 2</p>
                                    </div>
                                    <div class="column is-4-desktop is-6-tablet is-12-mobile">
                                        <p>Milestone 3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-10-desktop is-12-tablet is-12-mobile is-offset-1-desktop" v-if="this.activeTab === 'career'">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Career Stats
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <p>Table</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "SkaterComponent",
        created() {
            this.getSkater();
        },
        data: function () {
            return {
                skater: '',
                activeTab: 'season'
            }
        },
        computed: {
            activeSeason: function () {
                return this.activeTab === 'season' ? 'is-active' : '';
            },
            activeCareer: function () {
                return this.activeTab === 'career' ? 'is-active' : '';
            }
        },
        methods: {
            getSkater: function () {
                axios.get(this.domain + '/api/skater/' + this.$route.params.id)
                    .then(response => {
                        this.skater = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            toggleTab: function () {
                this.activeTab = this.activeTab === 'season' ? 'career' : 'season';
            }
        }
    }
</script>

<style scoped>

</style>